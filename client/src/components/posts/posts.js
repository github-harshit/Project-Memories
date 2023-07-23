import React from "react"; 
 import Post from  "./post/post.js"; 
  import {Grid, CircularProgress} from "@material-ui/core";
 import useStyles from "./style.js";
  import {useSelector} from "react-redux";

const Posts =({setCurrentId})=>{
     const classes = useStyles();
     let  posts = useSelector((state)=>state.posts);
      
    console.log(posts); 
     
     //   console.log("............"); 
     //   console.log(posts);
     //   console.log(posts.length);
     //   console.log(".........."); 
     
    
    
  
     return (
        
        !posts.length  ? <CircularProgress/> : (
          

      
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
         
         {posts.map((post)=>(
             <Grid key={post._id} item xs={12} sm={6}>
                 <Post post={post} setCurrentId={setCurrentId}/>
             </Grid>
         ))}
     
     </Grid>
     )
       
     )
}
 export default Posts; 