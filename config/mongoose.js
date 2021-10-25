const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbWALKOVER:WALKOVER1234@cluster0.iptmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error',function(){
    console.log('Error in connecting the databse :: MongoDB');

})
db.once('open',function(){
    console.log('Succesfully Connected to databse :: MongoDB');
})

module.exports = db;