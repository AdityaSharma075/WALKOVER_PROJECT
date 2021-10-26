const mongoose = require('mongoose');

const Admin = require('./admin');
const Test = require('./test');

const quesstionSchema = new mongoose.Schema({
    Question : {
        type : String,
        required : true
    },
    Option1 : {
        type : String,
        required : true
    },
    Option2 : {
        type : String,
        required : true
    },
    Option3 : {
        type : String,
        required : true
    }
    ,Option4 : {
        type : String,
        required : true
    },
    Answer : {
        type : String,
        required : true
    },
    admin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Admin',
    },
    test : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Test',
    }

},{
    timestamps : true
})

const Question =  mongoose.model('Question' , quesstionSchema);

module.exports = Question;