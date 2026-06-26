import { useContext } from "react";
import { PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const Postlist=()=>{
 const postList= useLoaderData();


  

  
return<>
{<LoadingSpinner/>}
{ postList.length===0 && <WelcomeMessage />}
{ postList.map((post)=>(
  <Post key={post.id} post={post}></Post>))}


</>
}
export const postLoader = () =>{
  return  fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data)=>{
return (data.posts);

})
}
export default Postlist;