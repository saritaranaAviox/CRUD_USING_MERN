import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/jwt.js";

export const Signup = async (req, res) => {
    try{
        const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if(userExists)
    {
        return res.status(400).json({message:"user with this email already exists"});
    }

    const hashpassword=await bcrypt.hash(password,10);

    await User.create({
        name,email,password:hashpassword
    });
    
    res.status(200).json({message:"User registered successfully..Please login "});
    }
    catch(error){
        res.status(500).json("Internal server error",error)
    }

}

export const Login=async(req,res)=>{
    try{    
        const {email,password}=req.body;
    const user=await User.findOne({email});

    if(!user)
    {
       return res.status(400).json({message:"User doesnot exists"});

    }
    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch)
    {
        return res.status(400).json({message:"Invalid password"})
    }

    const token=generateToken(user._id);

    res.status(200).json({
        message:"Login successfully",
        token:token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({message:"Internal server error",error})
    }
}