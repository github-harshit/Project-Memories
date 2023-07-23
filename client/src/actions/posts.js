import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
// action creators 
// are functions that return actions  
// action creators will automatically be dispatched to reducers once we call them from components 
// we we will be calling this action creator from App.js 

 export const getPosts = ()=>{
    return async (dispatch)=>{
        try{
            const {data} = await api.fetchPosts();
      
            dispatch({type: FETCH_ALL, payload: data.post}); 
             //  in this type : FETCH_ALL  is actually  the action 
        }catch(err){
            console.log(err.message);
        }
    }

     
 }
  export const createPost = (post)=> {
        return async (dispatch)=>{
            try{
                const {data} = await api.createPost(post);
                dispatch({type: CREATE, payload: data.post});
                 console.log( "data "  + data); 
            }catch(err){
                console.log(err.message);
            }
        }
  }
   export const updatePost =  (id, post)=>{
    return async (dispatch)=>{
     try{
        const {data} = await api.updatePost(id, post);
        console.log("data");
        console.log(data);
        dispatch({type: UPDATE, payload: data});
     }catch(err){
         console.log(err); 
     }

   }
}
 export const deletePost = (id)=>{
    return async (dispatch)=>{
        try{
            await api.deletePost(id);
            dispatch({type: DELETE, payload: id});
        }catch(err){
            console.log(err);
        }
    }
}
 export const likePost = (id)=>{
    return async (dispatch)=>{
        try{
            const {data} = await api.likePost(id);
            dispatch({type: LIKE, payload: data});
        }catch(err){
            console.log(err);
        }
    }
}