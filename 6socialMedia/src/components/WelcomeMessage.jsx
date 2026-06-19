const WelcomeMessage=({onGetPostList})=>{
  return<>
  <center className="welcome-message"><h1 >there are no posts</h1>
  <button type="button" class="btn btn-primary" onClick={onGetPostList}>Gets posts from server</button>
  </center>

  </>
}
export default WelcomeMessage;