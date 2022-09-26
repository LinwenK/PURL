import { useNavigate } from "react-router-dom";
import { useState } from "react";
import editSrv from "../services/editSrv";

function EditPost(props){
  const navigate = useNavigate();

  const tags = props.Post.tags;
  const addr = props.Post.addr;
  const uid = props.Post.post_uid;

  const goToPostDashboard = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("uid", uid);

    editSrv.edit(formData) 
    .then(response =>{
      if(response.data == "Edit"){
        navigate("/dashboard");
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }; 

  return(
    <>
      <h1>Edit Post Page</h1>
      <form onSubmit={(event)=>goToPostDashboard(event)}>
      <input type="text" name="tags" defaultValue={tags}/>
      <input type="text" name="addr" defaultValue={addr}/>
      <button type="submit">Edit</button>
      </form>
    </>
  )
}
export default EditPost;