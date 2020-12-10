import express from 'express';
import bodyParser from 'body-parser';
import Routes from './Routes/Routes.js';
import cors from 'cors';

//No need to edit anything here, it just connects the packages and stuff.

let app = express();

let router = express.Router();

app.use(bodyParser.json());
app.use(cors());

let PORT = 8080;


app.use('/', Routes);
app.get('/', (req, res, next)=> res.send("SUCCESS"));

app.listen(PORT, (err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server running ${PORT}`);
});