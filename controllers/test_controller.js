const Admin = require('../models/admin');
const Test = require('../models/test');
const Question = require('../models/questions');
const Student = require('../models/student');
module.exports.home = async function(req,res){
    
    if(res.locals.admin){
        let tests = await Test.find({admin : req.user.id})
        .sort(' -createdAt')
        .populate('admin')

        

        res.render('test' , {
            title : "",
            tests : tests,
        });
    }else{
        res.redirect('/admin');
    }
}
module.exports.create = async function(req,res){
    try {
        let admin = await Admin.findById(req.body.admin);
        if(admin){
            let test =  await Test.create({
                description : req.body.description,
                admin : req.body.admin,
                questions : []
            });
            admin.tests.push(test);
            admin.save();
            return res.redirect(`/test`)
        }
        
    } catch (error) {
        
    }
}
module.exports.question =  function(req,res){
    return res.render('test_questions')
}
module.exports.saveQuestion = async function(req,res){
    try {
        
        let question = await Question.create({
            Question : req.body.Question,
            Option1 : req.body.Option1,
            Option2 : req.body.Option2,
            Option3 : req.body.Option3,
            Option4 : req.body.Option4,
            Answer : req.body.Answer,
            test : req.body.test,
            
            
        })
        let test = await Test.findById(req.body.test);
        test.questions.push(question);
        test.save();
        if(req.xhr){
            return res.status(200).json({
                data: {

                },
                message: "Question created!"
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}



module.exports.view = async function(req,res){
    let questions = await Question.find({test : req.params.id});

    res.render('view_test',{
        
        title : "",
        questions : questions,
    
    })
}

module.exports.start = async function(req,res){
    
    // let questions = await Question.find({test : req.params.id});

    res.render('start_exam',{
        
        title : "",
        test_id : req.params.id 
    
    })
}
module.exports.startExam = async function(req,res){
    let questions = await Question.find({test : req.params.id});
    // let student = await Student.create({
    //     name : req.body.name,
    //     email : req.body.email
    // });
    res.render('exam',{
        
        title : "",
        questions : questions 
    
    })
}

module.exports.Submit = async function(req, res){
    console.log(req.body);
    const keys = Object.keys(req.body);
    
    var score = 0;
    keys.forEach(func);
    

     function func (key ,index , arr){
         Question.findById(key , function(err,question){
            if(question.Answer == req.body[keys[index]]){
                score = parseInt(score + 1);
                console.log('true' ,score);
                
            }
            
        });
        
    }
    console.log('true' ,score);
    if(req.xhr){
        return res.status(200).json({
            data: {
                score : score
            },
            message: "otp send"
        });
    }
}