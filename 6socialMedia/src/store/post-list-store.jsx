import { createContext,useReducer,useState,useEffect } from "react";


export const PostListData = createContext({ 
  postList:[],

  fetching : false,
  addPost: ()=>{},
 
  deletePost: ()=>{},});

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  if(action.type==="DELETE_POST"){
newPostList=currPostList.filter(
  (post)=>post.id !==action.payload.postId
)
  }

  else if(action.type==="ADD_INITIAL_POSTS"){
newPostList = action.payload.posts;

  }

  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
}

 



const PostListProvider = ({children})=>{

//   const DEFAULT_POST_LIST=[
//     { id:'1',
//   title:'going to mumbai',
//   body:'hi friends i am going to mumbai for my vacations. hpe to enjoy a lot, peace out.',
//   reactions:2,
//   userId:'user-9',
//   tags:['vacation', 'Mumbai', 'enjoying'],
//  },
// {id:'2',
//   title:'pass ho bhai',
//   body:'char sal ki masti ke bad bhi ho gye he pass hard to beleive',
//   reactions:15,
//   userId:'user-12',
//   tags:['Graduating', 'unbeleiveble'],
//  }]

   const[fetching,setFetching]= useState(false);
  
 useEffect(()=>{
  setFetching(true);
  const controller=new AbortController();
  const signal=controller.signal;
 fetch('https://dummyjson.com/posts',{signal})
.then(res => res.json())
.then((data)=>{
addInitialPosts(data.posts);
setFetching(false);

return()=>{
  controller.abort();
}

});
 },[]);




  const[postList,dispatchPostList]=useReducer(postListReducer,[])

  const addPost=(post)=>{

      
dispatchPostList({
  type: 'ADD_POST',
  payload:post
,
})
  }


  const addInitialPosts=(posts)=>{

dispatchPostList({
  type: 'ADD_INITIAL_POSTS',
  payload: { 
posts,
 },
})
  }


  const deletePost=(postId)=>{
   dispatchPostList({
    type: "DELETE_POST",
    payload:{
      postId,
    },
   })
  }

  

  return(<PostListData.Provider value={{postList,fetching,addPost,deletePost}}>{children}</PostListData.Provider>
  );

    
  

 

  



};
export default PostListProvider;