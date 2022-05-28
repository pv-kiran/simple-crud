const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    company : {
        type:String ,
        required: [true,'Please provide a company name'] ,
        maxlength: 25
    } ,
    position : {
        type:String ,
        required: [true,'Please provide a company name'] ,
        maxlength: 25
    } ,
    description: {
        type: String ,
        required: true
    },
    createdBy : {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: [true, 'Please provide a user']
    }
})

const Job = mongoose.model('job',JobSchema);
module.exports = Job;
