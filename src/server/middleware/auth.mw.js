import passport from 'passport';
import jwt from 'jsonwebtoken'

export function tokenCheck(req, res, next) {
    passport.authenticate('jwt', (err, user, info) => {




        if (err) {
            return next(err);
        }

        if (info) {
            return res.status(401).send({ message: info.message })
        }


        if (!user) {
            return res.status(401).json({ message: 'I cant find a user fool' })
        }


        req.user = user
        next();
    })(req, res, next)

}