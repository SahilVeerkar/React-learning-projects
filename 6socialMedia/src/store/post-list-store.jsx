import { createContext,useReducer } from "react";


const postList = createContext({ 
  postList:[],
  addPost: ()=>{},
  deletePost: ()=>{},});

const postListReducer=(currPostList,action)=>{
  return currPostList;
}

const postListProvider = ({children})=>{

  const[postList,dispatchPostList]=useReducer(postListReducer,[])

  const addPost=()=>{

  }

  const deletePost=()=>{
    
  }
  return <postList.Provider value={{postList,addPost,deletePost}}>{children}</postList.Provider>

};
export default postListProvider;