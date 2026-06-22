import { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost =()=>{
const {addPost}=useContext(PostListData);
 const userIdElement=useRef();
 const postTitleElement=useRef();
 const postBodyElement=useRef();
 const reactionsElement=useRef();
 const tagsElement=useRef();

 const handleSumbit=(event)=>{
event.preventDefault();
const userId=userIdElement.current.value;
const postTitle=postTitleElement.current.value;
const postBody=postBodyElement.current.value;
const reactions=reactionsElement.current.value;
const tags=tagsElement.current.value.split(' ');


userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";

fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
     title:postTitle,
  body: postBody,
  reactions: reactions,
  userId: userId,
  tags: tags,
  
  })
})
.then(res => res.json())
.then(post=>addPost(post));


}

return<>
<form className="create-post" onSubmit={handleSumbit}>

  <div className="mb-3">
    <label htmlFor="userId" class="form-label">
     enter your userId here
    </label>

    <input
      type="text"
      ref={userIdElement}
      className="form-control"
      id="userId"
      placeholder="enter your userId"
      
    />

   
  </div>

  <div className="mb-3">
    <label htmlFor="title" class="form-label">
     Post title
    </label>

    <input
      type="text"
      ref={postTitleElement}
      class="form-control"
      id="title"
      placeholder="how are you feeling today ?"
      
    />

   
  </div>

  <div className="mb-3">
    <label htmlFor="body" class="form-label">
     user content
    </label>

    <textarea
      type="text"
      ref={postBodyElement}
      rows="4 "
      class="form-control"
      id="body"
      placeholder="Tell us more about it"
      
    />

   
  </div> 

  <div className="mb-3">
    <label htmlFor="reactions" class="form-label">
     no. of reactions
    </label>

    <input
      type="text"
      ref={reactionsElement}
      class="form-control"
      id="reactions"
      placeholder="How many people reacted this post"
      
    />

    <div className="mb-3">
    <label htmlFor="tags" class="form-label">
     Enter your tags here
    </label>

    <input
      type="text"
      ref={tagsElement}
      class="form-control"
      id="tags"
      placeholder="please enter tags using space ?"
      
    />

   
  </div>

   
  </div>

 

  <button type="submit" className="btn btn-primary">
    Post
  </button>
</form>
</>
}
export default CreatePost;