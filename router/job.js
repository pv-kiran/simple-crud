const express = require('express');
const router = express.Router();
const {getAllJobs,getJob,createJob,editJob,deleteJob} = require('../controllers/jobController')


// Type :  GET
// Route: /api/job/all
// desc : Route for fething all the jobs created by the user
// Access : Private
router.get('/all' , getAllJobs)

// Type :  GET
// Route: /api/job/:id
// desc : Route for fething the job by id
// Access : Private
router.get('/:id' , getJob)

// Type :  POST
// Route: /api/job/create
// desc : Route for creating the job
// Access : Private
router.post('/create' , createJob )

// Type :  PUT
// Route: /api/job/edit/:id
// desc : Route for editing the job
// Access : Private
router.put('/edit/:id' , editJob)

// Type :  PUT
// Route: /api/job/remove/:id
// desc : Route for deleting the job
// Access : Private
router.delete('/remove/:id' , deleteJob)


module.exports = router;
