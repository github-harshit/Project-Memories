 
 import Post from '../models/postModel.js';
 const mongoose = import ('mongoose');
 export const getPosts= async (req, res)=>{
     try{
           const post = await Post.find();
           res.json({
                status: 200, 
                post:post
           })
           
     }catch(err){
          res.json({
                status: 404,
                    message: err.message
          })
     }
 }; 
 export const createPost= async (req, res)=>{
     try{
           
           const body = req.body; 
               const newPost = new Post(body);
                await newPost.save();
                res.status(201).json({
                    post: newPost
                    })

     }catch(err){
          res.json({
               status: 404,
                   message: err.message
         })
     }
     res.send('Post Creation'); 
 }; 
 export const updatePost= async (req, res)=>{ 
     try{
       
        const {id} = req.params;
       
        const post = req.body;
      
        // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
      
         const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
          res.json(updatedPost);  
          console.log(updatePost);
     }catch(err){
        res.json({
            status: 404,
                message: err.message
      })
         
     }
   
 }
  export const deletePost= async (req, res)=>{
    try{
         const {id}  = req.params; 
         await Post.findByIdAndRemove(id);
         res.json({message: 'Post Deleted Successfully'});
    }catch(err){
        res.json({
            status: 404,
                message: err.message
      })
    }
}
 export const likePost= async (req, res)=>{
    try{
         const {id} = req.params;
            const post = await Post.findById(id);
             const updatedPost = await Post.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});
                res.json(updatedPost);


    }catch(err){
        res.json({
            status: 404,
                message: err.message
      })
    }
 }
 