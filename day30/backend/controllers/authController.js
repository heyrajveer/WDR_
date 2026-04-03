import User from "../models/userSchema";
import bcrypt from "bcrypt";

exports.register =async(req,res)=>{
    try {
        const {name,email,password,role,city,phone}=req.body();

const userExist = await User.findOne({email});
if(userExist){
  return res.send.status(400).json({
    message:"already exist"
  });
}

const hashedPassword = await bcrypt.hash(password,10);
const user = new User({
    name,
    email,
    password:hashedPassword,
    role,
    city,phone
})
await user.save();
res.status(201).json({
    message:"successfully regitered";
})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

}
exports.login =async(req,res)=>{
    try {
        const {email,password}=req.body();
        const user =await User.findOne({email});
        if(!user){
             return res.status(400).json({ message: "Invalid Email" });
        }
       const match =await bcrypt.compare(user.password,password);
        if(!match){
            return res.status(400).json({ message: "Invalid Password" }); 
        }
        const accessToken =JWT.sign(
            {id:user._id,role:user.role}
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        )
        const  refreshToken =JWT.sign(
            {id:user._id,role:user.role}
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        )

        res.cookie("accessToken",accessToken,{
               httpOnly:true,
               secure:false,
               samesite:"lax"
        })
          res.cookie("refreshToken",refreshToken,{
               httpOnly:true,
               secure:false,
               samesite:"lax"
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}
