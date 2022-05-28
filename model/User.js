const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const UserSchema = new Schema({
    name : {
        type: String,
        required: [true,'Please proide a name'] ,
        minlength: 3,
        maxlength: 15
    } , 
    email: {
        type: String ,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , 'Please provide a valid email']
    } ,
    password: {
        type: String ,
        required: [true , 'Please provide a password'] ,
        minlength: 6 
    }
})

UserSchema.methods.genToken = function() {
    return jwt.sign({userId: this._id , name: this.name}, process.env.JWT_SECRET , {expiresIn: process.env.JWT_LIFETIME});
}


UserSchema.methods.checkUser = async function( password) {
    const match = await bcrypt.compare(password, this.password);
    return match;
}

UserSchema.pre('save' , async function() {
    const salt = await bcrypt.genSalt(10);
    this.password =  await bcrypt.hash(this.password,salt);
})

const User = mongoose.model('user',UserSchema);
module.exports = User;