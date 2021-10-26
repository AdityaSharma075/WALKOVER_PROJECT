module.exports.createTest = function(req,res){
    if(res.locals.admin){
        res.render('test');
    }else{
        res.redirect('/admin');
    }
}