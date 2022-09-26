import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import imgLoadSrv from '../services/imgLoadSrv';

function Content(props){
  const navigate = useNavigate();
  const [imgData,setImg] = useState([]);

  const goToPostDetail = (value) => {
    console.log(value.photo_src);
    navigate("/postdetail");
  };
  imgLoadSrv.loadMainImg()
    .then(response =>{
      setImg(response.data);
    })
    .catch(err=>{
      console.log(err);
    });
  return(
    <>
      {imgData.map((value, idx) => (
        <figure key={idx} className="content" onClick={()=>goToPostDetail(value)}>
          <img src ={value.photo_src} />
          <figcaption>
            <h6>Tags</h6>
            <p>somewhere street ave</p>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

function Main(props){
  // localStorage.setItem("userId", "cweald9")
  // const loggedUser = props.loggedUser;
  return(
    <>
      <h1>Main Page</h1>
      {/* <Content user={loggedUser}/> */}
      <Content />
    </>
  )
}
export default Main;