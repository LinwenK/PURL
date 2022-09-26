import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PostDashboard from "./PostDashboard";
import editSrv from "../services/editSrv";

function EditPost(props){
  const [item,setItem] = useState([]);

//jump the postdashboard
  const navigate = useNavigate();
  const goToPostDashboard = () => {
    navigate("/postdashboard");
  };
//jump the postdashboard    

//connect the edit.php file
  editSrv.edit() 
  .then(response =>{
    setItem(response.data);
  })
  .catch(err=>{
    console.log(err);
  })
//connect the edit.php file
  return(
    <>
      <h1>Edit Post Page</h1>
      <form onSubmit={goToPostDashboard}>
      <input value={this.props.table.user_id}/><br/>
      <input value={this.propst.able.post_id}/><br/>
      <input value={props.PostDashboard[props.index].post_uid}/><br/>
      <input value={props.PostDashboard[props.index].post_data}/><br/>
      <input value={props.PostDashboard[props.index].photo_src}/><br/>
      <input value={props.PostDashboard[props.index].tags}/><br/>
      <input value={props.PostDashboard[props.index].addr}/><br/>
      <button type="submit">Edit</button>
      </form>
    </>
  )
}
export default EditPost;