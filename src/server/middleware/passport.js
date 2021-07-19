import passport from 'passport'
import passportJWT from 'passport-jwt'
import passportLocal from 'passport-local'
import passportGoogle from 'passport-google-oauth2'
import { checkPassword } from '../utils/security'
import db from '../db/users'
require('dotenv').config();



export function configurePassport(app) {
    passport.serializeUser((user, done) => {
        if (user.password) {
            delete user.password;
        }
        done(null, user)
    });
    passport.deserializeUser((user, done) => done(null, user));


    passport.use(new passportLocal.Strategy({
        usernameField: 'email'
    }, async (email, password, done) => {


        try {
            const userFound = await db.findUser('email', email)

            if (userFound && checkPassword(password, userFound.hash)) {

                done(null, userFound)
            } else {
                done(null, false);
            }

        } catch (error) {
            done(error)
        }
    }));

    passport.use(new passportJWT.Strategy({
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }, async (payload, done) => {
        try {
            done(null, payload)
        } catch (error) {
            done
        }
    }));

    passport.use(
        new passportGoogle(
            {
                clientID: process.env.CLIENTID,
                clientSecret: process.env.CLIENTSECRET,
                callbackURL: 'http://localhost:3000/api/auth/login/google/redirect'
            },
            async function (accessToken, refreshToken, profile, done) {
                let userProfile = profile
                if (userProfile) {
                    try {

                        console.log(userProfile)
                        return done(null , userProfile)

                    } catch (err) {
                        console.log(err);
                        return done(null, false, { message: "Invalid login" });
                    }
                }
            }
        )
    );

    app.use(passport.initialize());

}




