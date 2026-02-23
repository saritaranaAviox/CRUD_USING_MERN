import mongoose from 'mongoose'
// const uri = 'mongodb://localhost:27017/demo_db'; 

export const connectDB=async () =>{mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to mongodb successfuly")
})
.catch((error)=>{
    console.error("connection failed",error)
})
}