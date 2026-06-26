import { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost =()=>{
// const {addPost}=useContext(PostListData);

 
return<>
<Form method="POST" className="create-post" >

  <div className="mb-3">
    <label htmlFor="userId" class="form-label">
     enter your userId here
    </label>

    <input
      type="text"
      name="userId"
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
      name="title"
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
      name="body"
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
      name="reactions"
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
      name="tags"
      class="form-control"
      id="tags"
      placeholder="please enter tags using space ?"
      
    />

   
  </div>

   
  </div>

 

  <button type="submit" className="btn btn-primary">
    Post
  </button>
</Form>
</>
}
export async function createPostAction(data){
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData),
  
  })
 
.then(res => res.json())
.then(post=>{
  console.log(postData);
});


return redirect("/");
}


export default CreatePost;