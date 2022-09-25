import { useNavigate } from "react-router-dom";
import {useState} from "react";
import dashboardLoad from "../services/dashboardLoad";
import { tab } from "@testing-library/user-event/dist/tab";

function Rows(props){
  const navigate = useNavigate();
  const goToEditPost = (index) => {
    navigate("/editpost");
  };

  const deletePost = (index) => {

  }
  return(
    <tr>
      <td>{props.table[props.index].user_id}</td>
      <td>{props.table[props.index].user_uid}</td>
      <td>{props.table[props.index].post_uid}</td>
      <td>{props.table[props.index].post_data}</td>
      <td><img src={props.table[props.index].photo_src}/></td>
      <td>{props.table[props.index].tags}</td>
      <td>{props.table[props.index].addr}</td>
      <td><button onClick={deletePost}>Delete Post</button></td>
      <td><button onClick={goToEditPost}>Edit Post</button></td>
    </tr>
  )
}

function PostDashboard(props){
  const [table,setTable] = useState([]);
  const [postdata,setPostdata] = useState({
    userId:"",
    postUid:"",
    postDate:"",
    photoSrc:"",
    tags:"",
    addr:""
  });

  dashboardLoad.load()
  .then(response =>{
    setTable(response.data);
  })
  .catch(err=>{
    console.log(err);
  });

  return(
    <>
      <h1>Post Dashboard Page</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User UID</th>
            <th>Post UID</th>
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
            return <Rows key={idx} post={post} index={idx} table={table} /> 
          })}
          
        </tbody>
      </table>      
    </>
  )
}
export default PostDashboard;