const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'quizodev05@gmail.com',
        pass : 'Quizo@123'
    }
});

module.exports = {transporter};