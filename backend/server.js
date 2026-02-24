import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors';
// import dotenv from 'dotenv'
import {connectDB} from './src/config/db.js'
import userRoutes from './src/routes/userRoutes.js'
import jobProfileRoutes from './src/routes/jobProfileRoutes.js'

// dotenv.config();
connectDB();
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);



app.use("/api/auth",userRoutes)
app.use("/api/jobprofile",jobProfileRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
