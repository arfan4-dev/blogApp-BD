const Post=require('../models/postModel');
const Like=require('../models/likeModel');

//Create Like
exports.createLike=async(req,res)=>{
    try{
        const {user,post}=req.body;
        const like=new Like({user,post});
        const savedLike=await like.save();
const updatePost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate('likes').exec();
        res.status(200).json({
            updatePost,
            message:"Like Created",
        })
    }

    catch(err){
        res.status(500).json({
            message:`Error while like creating ${err}`,
        })
    }
}


//Delete Like
exports.deleteLikes=async(req,res)=>{
    try{
        const {like,post}=req.body;
        
        const deleteLike=await Like.findOneAndDelete({post:post, _id:like});

        const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true});
        res.status(200).json({
            updatePost,
            message:"Like Deleted",
        })
    }

    catch(err){
        res.status(400).json({
            message:`Error while unLike deleting ${err}`,
        })
    }
}














