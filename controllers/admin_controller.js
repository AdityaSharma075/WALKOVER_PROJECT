const Admin = require('../models/admin');

module.exports.home = function(req,res){
    
    res.render('admin')
}

module.exports.signIn = function(req,res){
    res.redirect('/');
}