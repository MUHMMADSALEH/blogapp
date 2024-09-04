
import User from "../models/User.js";
import { Utils } from "../utility/utils.js";
export class AuthController{

    
    static singup=async(req,res)=>{
      try{
        const user=await User.findOne({username:req.body.username});
        if(user)return res.status(400).json({status:false,message:"User aleardy exist"});
        const hashPassword=await Utils.hashPassword(req.body.password);
        const newUser=await User.create({...req.body,password:hashPassword});
        return res.json({status:true,user:newUser});
     
    }  catch(err){
        return res.status(500).json({status:false,message:err.message});
    }
    }

    static singin=async(req,res)=>{
        try{
           const user=await User.findOne({username:req.body.username});
           if(!user) return res.status(400).json({status:false,message:"Invalid Credentials"});
           const result=await Utils.validatePassword(req.body.password,user.password);
           if(!result)return res.status(400).json({status:false,message:"Invalid Credentials"});
           const token=await Utils.generateToken({id:user._id,username:user.username});
           return res.cookie("access_token",token,{https:true}).status(200).json({status:true,user});


        }catch(err){
            return res.status(500).json({status:false,message:err.message});
        }
    }
}