const Admin = require('../models/admin');
// const passport = require('passport')
module.exports.home = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/') 
    }
    return res.render('admin',{
        title : "Quizo : Login"
    })
    
}

module.exports.signIn = function(req,res){
    res.redirect('/');
}
module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}