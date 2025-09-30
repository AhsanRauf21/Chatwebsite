import mongoose from "mongoose";


const userSchema  = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
      password:{
        type:String,
        required:true,

    },
    confirmPassword:{
        type:String,
    }
},{timestamps:true})


const UserModel =  mongoose.model('user',userSchema)

export default UserModel 