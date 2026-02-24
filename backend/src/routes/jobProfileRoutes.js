import express from 'express';
const router=express.Router();
import { createJobProfile,getAllJobProfiles,getJobProfileById,updateJobProfile,deleteJobProfile } from "../controllers/jobProfileController.js";



router.post('/',createJobProfile);
router.get('/',getAllJobProfiles)
router.post('/:id',getJobProfileById);
router.put('/:id',updateJobProfile);
router.delete('/:id',deleteJobProfile);

export default router;
