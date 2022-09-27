import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import imgLoadSrv from '../services/imgLoadSrv';

function Content(props){
  const navigate = useNavigate();
  const [imgData,setImg] = useState([]);

  const goToPostDetail = () => {
    navigate("/postdetail");
  };
  imgLoadSrv.load()
    .then(response =>{
      setImg(response.data);
    })
    .catch(err=>{
      console.log(err);
    });
  return(
    <>
      <div id="mainpost">
      {imgData.map((v, idx) => (
        <figure key={idx} className="content" onClick={goToPostDetail}>
          <img src ={v.photo_src} width="200" height="200"/>
          <figcaption>
            <h6>Tags</h6>
            <p>somewhere street ave</p>
          </figcaption>
        </figure>
      ))}
      </div>
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