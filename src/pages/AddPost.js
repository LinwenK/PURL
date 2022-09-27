import {useNavigate} from "react-router-dom";
import {useState, useRef} from "react";
import addSrv from "../services/addSrv";

function AddPost(props){

  const navigate = useNavigate();

  const initItem = {
    photoSrc:"",
    tags:"",
    addr:""
  }
  const [item, setItem] = useState(initItem);
  const [file, setFile] = useState();
  const resetForm = useRef();
  const resetTag = useRef();
  const resetAddr = useRef();

  const insertItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("userId", props.User.user_id);
    formData.append("userUid", props.User.user_uid);
    
    addSrv.add(formData)
    .then(response =>{
      console.log(response)
      navigate("/main");
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const clearData = (event) => {
    setItem(initItem);
    resetForm.current.value = ""; 
    resetTag.current.value = "";
    resetAddr.current.value= "";
  }

 
  return(
    <>
      <h1>Add Post Page</h1>

      <form onSubmit={(event) => {insertItem(event)}} >
        <input name="tags" placeholder="Tags" ref={resetTag} required/><br/>
        <input name="addr" placeholder="Place address" ref={resetAddr} required/><br/>
        <input type="file" name="photoSrc" placeholder="Photo data" ref ={resetForm} onChange={(event) => {setFile(event.target.files[0])}}  required/><br/>
      <button type="submit"> Confirmed</button>
      <button type="button" onClick={(event) =>{clearData(event)}} >Clear</button>
      </form>      
    </>
  )
}
export default AddPost;