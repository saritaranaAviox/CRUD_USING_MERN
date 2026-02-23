import dotenv from 'dotenv'
dotenv.config();
import exprees from 'express'
import cors from 'cors';
// import dotenv from 'dotenv'
import {connectDB} from './src/config/db.js'
import userRoutes from './src/routes/userRoutes.js'
// import jobProfileRoutes from './src/routes/jobProfileRoutes.js'

// dotenv.config();
connectDB();
const app=exprees();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(exprees.json())


app.use("/api/auth",userRoutes)
// app.use("/api/jobprofile",jobProfileRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
