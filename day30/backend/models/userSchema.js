import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true 
    },
    password:{
         type: String,
    required: true
    },
    role:{
        type:String,
        enums:["user","pandit"],
        default:"user"
    },
    city:String,
    phone:String

},{timestamps:true})
module.export =mongoose.model("User",UserSchema);