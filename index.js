import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { createRemoteJWKSet, jwtVerify } from "jose"
import productRoute from "./src/Routes/productRoute.js"
import { databaseConnection } from "./src/config/db.js"
import { commentRoute } from "./src/Routes/commentRoute.js"
import checkLogin from "./src/middelware/checkLogin.js"



const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

// database connection
databaseConnection()
app.get(`/`,(req,res)=>{
    res.status(200).json({success:true,message:"wellcome to the server"})
})
app.get("/auth/me", checkLogin, (req, res) => {
  res.json({
    success: true,
    user: req.payload,
  });
});

app.use('/product',productRoute)
app.use('/comment',commentRoute)
// error handeling 
app.use((err,req,res,next)=>{
    console.log(err?.message || err);
    res.status(400).json({success:false,message:"This is a server site error.Please Contact with Developer "})
    next(err?.message || err)
})


// app.listen(5000,()=>{
//     console.log(`server running on port 5000`);
// })

export default app;