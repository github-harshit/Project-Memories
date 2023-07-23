const initialState = [
//    {
//    title: "sample",
//    message: "message",
//    creator: "harshit",
//    tags: ["tag1", "tag2"]
   
   
   
   
// }, {
//    title: "sample2",
//    message: "message2",
//    creator: "harshit2",
//    tags: ["tag1", "tag2"]

// }

]
const reducer = (posts=initialState, action)=>{
     switch(action.type){
         case  'FETCH_ALL':
            
             return action.payload; 
          case  'CREATE': 
             return [...posts , action.payload]
          
            case 'UPDATE':
               return posts.map((post)=>post._id === action.payload._id ? action.payload : post)

            case 'DELETE':
               return posts.filter((post)=>post._id !== action.payload)
               default : 
             return posts; 
             
             case 'LIKE':
                return posts.map((post)=>post._id === action.payload._id ? action.payload : post)
     }
}
 export default reducer; 