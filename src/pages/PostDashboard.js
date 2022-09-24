import { useNavigate } from "react-router-dom";
import {useState} from "react";

function Rows(props){
  const navigate = useNavigate();
  const goToEditPost = (index) => {
    navigate("/editpost");
  }

  const deletePost = (index) => {

  }
  return(
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button onClick={deletePost}>Delete Post</button></td>
      <td><button onClick={goToEditPost}>Edit Post</button></td>
    </tr>
  )
}

function PostDashboard(){
  const [postdata,setPostdata] = useState({
    userId:"",
    postUid:"",
    postDate:"",
    photoSrc:"",
    tags:"",
    addr:""
  });
  const [table,setTable] = useState([]);
  return(
    <>
      <h1>Post Dashboard Page</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Post data</th>
            <th>Photo src</th>
            <th>Tags</th>
            <th>Addr</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {table.map((post,idx)=>{
            return <Rows key={idx} post={post} index={idx}/> 
          })}
          
        </tbody>
      </table>      
    </>
  )
}
export default PostDashboard;