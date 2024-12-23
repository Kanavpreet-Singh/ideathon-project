const mongoose = require('mongoose');
const { type } = require('os');

const issueSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        maxLength:50
    },
    description:{
        type:String,
        required:true
    },
    upvote:{
        type:Number,
        default:0
    }


})
const Issue=mongoose.model("Issue",issueSchema)


const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    age: { type: Number, required: true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    
});

const User = mongoose.model('User', userSchema);

const OfficialSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    age: { type: Number, required: true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    
});

const Official = mongoose.model('Official', OfficialSchema);


module.exports={Issue,User,Official}