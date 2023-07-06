const Comment=require('../models/commentModel');
const Post=require('../models/postModel');
const createComment=async(req,res)=>{
    try{
        const {user,body,post}=req.body;

        // create comment
        const newComment=await Comment.create({user,body,post});
        // const comment=new Comment({user,body,post});
        // const newComment=await comment.save();  

        //update posts
const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments:newComment._id}},{new:true}).populate('comments').exec()

        res.status(200).json({
            updatePost,
            message:'Comment created successfully',
        })
    }
    catch(error){
        res.status(400).json({
            message:`Error occured while creating comment ${error}`,
        })
    }
}

module.exports=createComment;