import { createRemoteJWKSet, jwtVerify } from "jose";

const checkLogin= async(req,res,next)=>{
    
try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return  res.status(400).json({success:false,message:"authentication fail"})
    }

    const token = authHeader?.split(' ')[1];
    if (!token) {
        return  res.status(400).json({success:false,message:"authentication  fail"})
        
    }
  
    const JWKS  = createRemoteJWKSet(
         new URL(process.env.JWKS_URL)
    )
    const {payload}= await jwtVerify(token,JWKS,{
         issuer: 'http://localhost:3000', // Should match your JWT issuer, which is the BASE_URL
      audience: 'http://localhost:3000', // Should match your JWT audience, which is the BASE_URL by default
    })
    if (!payload) {
        return  res.status(400).json({success:false,message:"authentication fail"})
    }
    // console.log(payload);
    req.payload= payload
    next()
} catch (error) {
    console.log('error?.message || error', error?.message || error)
     res.status(400).json({success:false,message:"authentication  fail"})
}
}


export default checkLogin