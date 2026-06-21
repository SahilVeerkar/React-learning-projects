import { useContext } from "react";
import { PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
const Postlist=()=>{
  const {postList,addInitialPosts}=useContext(PostListData);
 useEffect(()=>{
 fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data)=>{
addInitialPosts(data.posts);

});
 },[]);

  

  
return<>
{postList.length===0 && <WelcomeMessage />}
{postList.map((post)=>(
  <Post key={post.id} post={post}></Post>))}


</>
}
export default Postlist;