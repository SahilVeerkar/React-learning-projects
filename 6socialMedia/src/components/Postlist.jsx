import { useContext } from "react";
import { PostListData } from "../store/post-list-store";
import Post from "./Post";
const Postlist=()=>{
  const {postList}=useContext(PostListData);
  
return<>
{postList.map((post)=>(
  <Post key={post.id} post={post}></Post>))}


</>
}
export default Postlist;