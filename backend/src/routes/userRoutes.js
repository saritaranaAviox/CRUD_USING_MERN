import express from 'express'
const router=express.Router();
import { Signup ,Login} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js';

router.post('/signup',Signup)
router.post('/login',Login)
// router.get('/profile',protect,(req,res)=>{
//     res.json(req.user)
// })


export default router;