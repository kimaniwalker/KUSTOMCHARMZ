import express from 'express';
import db from '../../db/users';
import { generateHash, checkPassword } from '../../utils/security';
import { tokenCheck } from '../../middleware/auth.mw'

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        let results = await db.all()
        res.json(results);
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });
    }

});

router.get('/me', /* passport.authenticate('jwt') */ tokenCheck,  async (req, res) => {
    /* const bearerToken = req.headers.authorization;

    if (bearerToken) {
        const token = bearerToken.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            res.json({user})
        });
    } else {
        res.sendStatus(401);
    } */

    res.json({message: req.user})

});


router.get('/:id', async (req, res) => {
    let userid = req.params.id
    try {
        res.json({ msg: 'You write some good code brotha !!' + userid });
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

router.get('/compare/:pw', async (req, res, next) => {
    const token = await checkPassword(req.params.pw, '$2b$12$kQnCRgkr8pR7wP0dUv9vpucahOosc6/JVR9ellXrEuNOCalxM9eR2');
    return res.send(token);
});

router.put("/", async (req, res) => {


    try {

        let insertObject = req.body;
        
        console.log(insertObject);
        let idObj = await db.update(insertObject, insertObject.id);
        res.status(201).json(idObj);

    } catch (err) {
    console.log('Error' + err);
       res.send(err)

    }
});

router.put("/forgot-password", async (req, res) => {


    try {
        let hash = await generateHash(req.body.password);
        let insertObject = {
            hash,
            id: req.body.id
        };
        
        console.log(insertObject);
        let idObj = await db.update(insertObject, insertObject.id);
        res.status(201).json(idObj);

    } catch (err) {
    console.log('Error' + err);
       res.send(err)

    }
});

router.post("/", async (req, res) => {


    try {

        let hash = await generateHash(req.body.password);
        let insertObject = {
            email: req.body.email,
            hash,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            state: req.body.state,
            zip: req.body.zipcode,
            address: req.body.address,
            phone: req.body.phone,
            role: req.body.role,
            profile_picture: req.body.profile_picture

        };
        console.log(insertObject);
        let idObj = await db.insert(insertObject);
        res.status(201).json(idObj);

    } catch (err) {
        console.log('Error' + err);
        if (err.errno === 1062) {
            res.status(500).send("Emails have to be unique!");
        } else res.status(500).send(err);

    }
});

router.post("/getUser", async (req, res) => {


    try {

        let column = req.body.column;
        let value = req.body.value;


        let idObj = await db.findUser(column, value);
        res.status(200).json(idObj);

    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let results = await db.delete(id);
        res.json(results);
    } catch (error) {
        res.sendStatus(500).json({ msg: 'You write some bad code brotha !!', error: error.message });
    }

});





export default router;