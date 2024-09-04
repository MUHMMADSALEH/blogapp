import Blog from "../models/Blog.js";

export class BlogController{

    static add=async(req,res)=>{
      try{
        const newBlog=await Blog.create(req.body);
        return res.status(200).json({status:true,Blog:newBlog});
        
      }catch(err){
        return res.statu(500).json({status:false,message:err.message});
      }
    }

    static getAll=async(req,res)=>{
        try{
           const blogs=await Blog.find();
           return res.status(200).json({status:true,blogs});
        }catch(err){
            return res.status(500).json({status:false,message:err.message});
        }
    }
    static getSingle=async(req,res)=>{
        try{
            const blogs=await Blog.findOne({_id:req.params.id});
            return res.status(200).json({status:true,blogs});
         }catch(err){
             return res.status(500).json({status:false,message:err.message});
         }
    }
    static update=async(req,res)=>{
        try{
            const updatedblog=await Blog.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true});
            return res.status(200).json({status:true,updatedblog});
         }catch(err){
             return res.status(500).json({status:false,message:err.message});
         }
    }
    static delete=async(req,res)=>{
        try{
            const updatedblog=await Blog.findByIdAndDelete({_id:req.params.id});
            return res.status(200).json({status:true,updatedblog});
         }catch(err){
             return res.status(500).json({status:false,message:err.message});
         }
    }
}