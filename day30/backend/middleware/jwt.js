  


const verifytoken =(req,res,next)=>{
  const token = req.cookies?.accessToken;

if(!token) {
    return res.status(401).json({ message: "Not token" });
  }
const decode = jwt.verify(token,process.env.JWT_SECRET);
  req.user =decode;



  }

  exports 

