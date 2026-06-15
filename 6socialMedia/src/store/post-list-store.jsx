import { createContext,useReducer } from "react";


export const PostListData = createContext({ 
  postList:[],
  addPost: ()=>{},
  deletePost: ()=>{},});

const postListReducer=(currPostList,action)=>{
  return currPostList;
}

 



const PostListProvider = ({children})=>{

  const DEFAULT_POST_LIST=[
    { id:'1',
  title:'going to mumbai',
  body:'hi friends i am going to mumbai for my vacations. hpe to enjoy a lot, peace out.',
  reactions:2,
  userId:'user-9',
  tags:['vacation', 'Mumbai', 'enjoying'],
 },
{id:'2',
  title:'pass ho bhai',
  body:'char sal ki masti ke bad bhi ho gye he pass hard to beleive',
  reactions:15,
  userId:'user-12',
  tags:['Graduating', 'unbeleiveble'],
 }]
  




  const[postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST)

  const addPost=()=>{

  }

  const deletePost=(postId)=>{
    console.log(`delete post called for : ${postId}`)
  }
  return(<PostListData.Provider value={{postList,addPost,deletePost}}>{children}</PostListData.Provider>
  );

    
  

 

  



};
export default PostListProvider;