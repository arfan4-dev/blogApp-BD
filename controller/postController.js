const post=require('../models/postModel');

exports.createPost=async(req,res)=>{
    const {title,body}=req.body;
    try{
        const newPost=await post.create({title,body});
        res.status(200).json({
            message:'Post created successfully',
            newPost,
        })
    }
    catch(err){
        res.status(400).json({
            message:`Error occured while creating post ${err}`,
        })
    }
}


exports.getPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
    const fetchPost=await post.find();
    res.status(500).json({
        message:'Posts fetched successfully',
        fetchPost,
    })
}
    catch(err){
        res.status(400).json({
            message:`Error occured while fetching post ${err}`,
        })
    }
}