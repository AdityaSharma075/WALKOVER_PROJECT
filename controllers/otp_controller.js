const nodemailer = require('../config/nodemailer');
const passport = require('passport');
var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);

module.exports.sendOtp = function(req,res){
    nodemailer.transporter.sendMail({
        from: 'quizodev05@gmail.com',
        to :  req.body.username,
        subject : "Otp for Verification is....",
        html : '<h3>OTP for account verification is </h3>'  + "<h1 style='font-weight:bold;'>" + otp +'</h1> ',

    } , (err,info)=>{
        if(err){
            console.log('error in sending the mail ' ,err);
            return;
        }
        console.log('Message sent' , info);
        return;
    });
    // console.log(req.body);
    
    if (req.xhr){
        

        return res.status(200).json({
            data: {
                
            },
            message: "otp send"
        });
    }
}
module.exports.verify = function(req,res){
    if(req.body.password == otp){
       
        res.redirect('/');
    }else{
        console.log('incoreect otp')
        res.redirect('/admin');
    }
    
    // console.log(  'locals.admin' , res.locals.admin.username);
    // res.redirect('/');
}

