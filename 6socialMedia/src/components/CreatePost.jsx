import { useRef } from "react";

const CreatePost =()=>{

 const userId=useRef();
 const postTitle=useRef();
 const postBody=useRef();
 const reactions=useRef();
 const tags=useRef();

return<>
<form className="create-post">

  <div className="mb-3">
    <label htmlFor="userId" class="form-label">
     enter your userId here
    </label>

    <input
      type="text"
      ref={userId}
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
      ref={postTitle}
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
      ref={postBody}
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
      ref={reactions}
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
      ref={tags}
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