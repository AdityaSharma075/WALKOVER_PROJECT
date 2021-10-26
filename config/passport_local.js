const passport = require('passport');
const LocalStrategy = require('passport-local');

const Admin = require('../models/admin');


passport.use('local', new LocalStrategy(
    function(username , password , done){
        console.log('as')
        Admin.findOne({username : username} , function(err , user){
            if(err){console.log('Error in finding the User Passport->Local');return(done(err))}
            if(!user || password != user.password){
                console.log('Invalid username or password');
                return done(null , false);
            }
            return done(null , user);
        });

    }
));

passport.use( 'otp' , new LocalStrategy(
    function( username , password , done){
        console.log('i am here')
        Admin.findOne({username : username} , function(err , user){
            if(err){console.log('Error in finding the User Passport->Local');return(done(err))}
            
            return done(null , user);
        });

    }
));
passport.serializeUser(function(user,done){
   
    
    done(null , user.id);
});

passport.deserializeUser(function(id , done){
    Admin.findById(id , function(err, user){
        if(err){console.log('Error in finding the user passport->local->serialiseUser'); return done(err);}
        return done(null , user);
    })
})

passport.checkAuthentication =function(req,res , next){
    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.admin = req.user;
    }
    next();
}

module.exports = passport;