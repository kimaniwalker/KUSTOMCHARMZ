import express from 'express';
import routes from './routes';
import path from 'path'
import morgan from 'morgan';
import dotenv from 'dotenv'
import passport from 'passport'
import {configurePassport} from './middleware/passport' 

const app = express();
dotenv.config();

configurePassport(app);
/* app.use(passport.initialize()); 
 */

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());


app.use(routes);
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname , '../public/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
