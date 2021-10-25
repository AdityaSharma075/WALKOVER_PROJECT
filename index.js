const express = require('express');
// const MongoStore = require('connect-mongo');
const db = require('./config/mongoose');

const app = express();

const port = 8000;



app.use('/' , require('./routes'));




app.listen(port , function(err){
    if(err){
        console.log(`Error in loading the server : ${port}`);
        return;
    }
    console.log(`System is up and running on port : ${port}`);
})