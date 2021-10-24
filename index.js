const express = require('express');

const app = express();

const port = 3000;








app.listen(port , function(err){
    if(err){
        console.log(`Error in loading the server : ${port}`);
        return;
    }
    console.log(`System is up and running on port : ${port}`);
})