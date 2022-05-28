const Job = require('../model/Job');
const {StatusCodes} = require('http-status-codes');

const getAllJobs = async (req,res) => {
    
    try {
        const jobs = await Job.find({createdBy: req.user.userId});
            if(!jobs || jobs.length === 0) {
              return res.status(StatusCodes.NOT_FOUND).send('No jobs are created by this user');
            } else {
            res.status(StatusCodes.OK).json({
                jobs: jobs ,
                count: jobs.length
            });
            }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }

}

const getJob = async (req,res) => {
    const { id: jobId } = req.params;
    const { userId} = req.user;
    try {
        const job = await Job.find({
            _id:jobId ,
            createdBy: userId
        });
        if(!job || job.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).send('Not found any job with given ID');
        } else {
            res.status(StatusCodes.OK).json(job);
        }
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}

const createJob = async (req,res) => {
    req.body.createdBy = req.user.userId;
    try {
        const newJob = await Job.create(req.body);
        res.status(StatusCodes.OK).json(newJob);
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json(err);
    }    
} 


const editJob = async (req,res) => {
   const {id: jobId} = req.params;
   const {userId} = req.user;
   try {
       const job = await Job.findOneAndUpdate({
           _id: jobId ,
           createdBy: userId
       },
       {$set: req.body} ,
       {new: true}
       )
       if(!job || job.length === 0) {
           return res.status(StatusCodes.BAD_REQUEST).send('Job not found for this id');
       } 
       res.status(StatusCodes.OK).json(job);
   } catch (err) {
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
   }
}

const deleteJob = async (req,res) => {
   const {id: jobId} = req.params;
   const {userId} = req.user;
   try {
       const job = await Job.findOneAndDelete({
           _id: jobId ,
           createdBy: userId
       }
       )
       if(!job) {
           return res.status(StatusCodes).send('Job not found for this id');
       } 
       res.status(StatusCodes.OK).send('Successfully deleted');
   } catch (err) {
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
   }
}


module.exports = {
    getAllJobs ,
    getJob,
    createJob,
    editJob,
    deleteJob
}