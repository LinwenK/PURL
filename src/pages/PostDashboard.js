import { useNavigate } from "react-router-dom";

function PostDashboard(){
  const navigate = useNavigate();

  const goToEditPost = () => {
    navigate("/editpost");
  }
  return(
    <>
      <h1>Post Dashboard Page</h1>
      <button onClick={goToEditPost}>Edit Post</button>
    </>
  )
}
export default PostDashboard;