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
  // const {reset} = useForm()
  const [item, setItem] = useState(initItem);
  const [file, setFile] = useState();
  const resetForm = useRef();

  const insertItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("userId", props.User.user_id);
    formData.append("userUid", props.User.user_uid);
    // formData.append("test", "Hello");
    for (let key of formData) {
      console.log(key[0], key[1]);
    }
    
    addSrv.add(formData)
    .then(response =>{
      console.log(response)
      // navigate("/dashboard");
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const clearData = (event) => {
    setItem(initItem);
    resetForm.current.value = ""; 
    
  }

 
  return(
    <>
      <h1>Add Post Page</h1>

      <form onSubmit={(event) => {insertItem(event)}} >
      {/* <form> */}
        <input name="tags" placeholder="Tags" value={item.tags} onChange={(event) => {setItem('tags', event.target.tags)}} required/><br/>
        <input name="addr" placeholder="Place address" value={item.addr} onChange={(event) => {setItem({'addr': event.target.addr})}} required/><br/>
        {/* <input type="file" name="photoSrc" placeholder="Photo data" onChange={(event) => {setFile(event.target.files[0])}}  required/><br/> */}
        {/* <input name="tags" placeholder="Tags" required/><br/>
        <input name="addr" placeholder="Place address"  required/><br/> */}
        <input type="file" name="photoSrc" placeholder="Photo data" ref ={resetForm} onChange={(event) => {setFile(event.target.files[0])}}  required/><br/>

      <button type="submit"> Confirmed</button>
      <button type="button" onClick={(event) =>{clearData(event)}} >Clear</button>
      </form>      
    </>
  )
}
export default AddPost;