import {useNavigate} from "react-router-dom";
import {useState} from "react";
import addSrv from "../services/addSrv";

function AddPost(){

  const [item,setItem] = useState({
    userId:"",
    postUid:"",
    postDate:"",
    photoSrc:"",
    tags:"",
    addr:""
  });

  const [array,setArray] = useState([]);

  const newItem = (event) => {
    setItem(item => [...item, newItem])
  }

  addSrv.add()
  .then(response =>{
    setItem(response.data);
  })
  .catch(err=>{
    console.log(err);
  })

  const navigate = useNavigate();
  const goToPostDashboard = () => {
    navigate("/postdashboard");
  };

  return(
    <>
      <h1>Add Post Page</h1>
      <form onSubmit={goToPostDashboard}>
        <input name="user_id" placeholder="Your user ID"required/><br/>
        <input name="user_uid" placeholder="Your user_uid"required/><br/>
        <input name="post_uid" placeholder="Your post uid"  required/><br/>
        <input type="date" name="post_data" placeholder="Upload date" required/><br/>
        <input type="file"
         name="photo_src" placeholder="Photo data" required/><br/>
        <input name="tags" placeholder="Tags" required/><br/>
        <input name="addr" placeholder="Place address" required/><br/>
      <button typ
      e="submit" onClick={(event) =>{newItem(event)}} >Edit</button>
      </form>      
    </>
  )
}
export default AddPost;