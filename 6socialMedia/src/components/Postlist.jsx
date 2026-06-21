import { useContext } from "react";
import { PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
const Postlist=()=>{
  const {postList,addInitialPosts}=useContext(PostListData);
  const[fetching,setFetching]= useState(false);
  
 useEffect(()=>{
  setFetching(true);
 fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data)=>{
addInitialPosts(data.posts);
setFetching(false);

});
 },[]);

  

  
return<>
{fetching && <LoadingSpinner/>}
{!fetching && postList.length===0 && <WelcomeMessage />}
{!fetching && postList.map((post)=>(
  <Post key={post.id} post={post}></Post>))}


</>
}
export default Postlist;