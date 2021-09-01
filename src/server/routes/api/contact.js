import { Router } from 'express';
import { addContact, sendEmail } from '../../utils/mail';


let router = Router();


router.post('/', (req, res) => {

  sendEmail('admin@kustomcharmz.com', req.body.email, req.body.subject , req.body.content, req.body.name) 
    .then((response) => {
      console.log(response);
      res.send(response);
    }).catch((err) => {
      console.log(err)
    });
})

router.put('/subscribe', (req, res) => {

  addContact(req.body.firstname, req.body.lastname, req.body.email)
    .then((response) => {
      console.log(response);
      res.send(response);
    }).catch((err) => {
      console.log(err)
    });
})



export default router;