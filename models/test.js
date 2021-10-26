const mongoose = require('mongoose');

const Admin = require('./admin');

const testSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    admin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Admin',
    },
    questions : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'Question'
        }
    ]
} ,{
    timestamps : true
})

const Test = mongoose.model('Test' , testSchema);
module.exports = Test ;