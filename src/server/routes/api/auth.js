import express from 'express';
import db from '../../db/users';
import { checkPassword } from '../../utils/security';
import jwt from 'jsonwebtoken'
import passport from 'passport';



const router = express.Router();

router.get('/', async (req, res) => {

    try {
        let results = await db.all()
        res.json(results);
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });
    }

});

router.get('/generate/:pw', (req, res, next) => {
    generateHash(req.params.pw)
        .then((hash) => {
            res.send(hash);
        }).catch((err) => {
            next(err);
        })
});

router.get('/compare/:pw', (req, res, next) => {
    checkPassword(req.params.pw, '$2b$12$pmNURpkI4N66.UVwj5HOQ.vgH0pIx2jC9NrRYTjtDmHOuvdXdiHFO')
        .then((hash) => {
            res.send(hash);
        }).catch((err) => {
            next(err);
        })
});


router.post("/login", passport.authenticate('local'), async (req, res) => {

    try {

        const token = jwt.sign({ "id": req.user.id, "role": req.user.role, "email": req.user.email }, process.env.JWT_SECRET, { expiresIn: '15d' });
      

        res.status(200).json(token)




    } catch (err) {
        console.log('Error' + err);
       res.status(500).send(err);

    }
});
router.get("/login/google", passport.authenticate('google', {
    scope:
        ['email', 'profile']
}), async (req, res) => {
});
router.get("/login/google/redirect", passport.authenticate('google', {
    
        successRedirect: "/",
        failureRedirect: "/api/auth/login"
      
}), async (req, res) => {

    try {
        /* 
              const token = jwt.sign({ "id": req.user.id, "role": req.user.role, "email": req.user.email }, process.env.JWT_SECRET , { expiresIn: '15d' });
              
              console.log(token); */
        return res.json({ message: 'testing' })




    } catch (err) {
        console.log('Error' + err);
        res.send(err)
    }
});


export default router;