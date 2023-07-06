const express=require('express');
const router=express.Router();

const createComment=require('../controller/commentController');
const {createPost,getPost}=require('../controller/postController');
const {createLike,deleteLikes}=require('../controller/likeController');
router.post('/comments/create',createComment)
router.post('/posts/create',createPost)
router.get('/posts',getPost)
router.post('/likes/like',createLike)
router.post('/likes/unlike',deleteLikes)
module.exports=router;