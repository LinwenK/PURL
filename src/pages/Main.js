<<<<<<< HEAD
// import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
// import imgLoadSrv from '../services/imgLoadSrv';
import data from '../services/post_tb';

function Content(props){
  // const user = props.user;
  const navigate = useNavigate();
  // const [imgData,setImg] = useState();
=======
import { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import imgLoadSrv from '../services/imgLoadSrv';

function Content(props){
  const navigate = useNavigate();
  const [imgData,setImg] = useState([]);
>>>>>>> jun

  const goToPostDetail = () => {
    navigate("/postdetail");
  };
<<<<<<< HEAD
  //let username = {user};
  // imgLoadSrv.load(username)
  //   .then(response =>{
  //     setImg(response);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   });

  // useEffect(()=>{
  //      console.log(imgData);
  //   },[]);
  return(
    <>
      { data.map((v,idx) => (
        <figure key={idx} className="content" onClick={goToPostDetail()}>
=======
  imgLoadSrv.load()
    .then(response =>{
      setImg(response.data);
    })
    .catch(err=>{
      console.log(err);
    });
  return(
    <>
      {imgData.map((v, idx) => (
        <figure key={idx} className="content" onClick={goToPostDetail}>
>>>>>>> jun
          <img src ={v.photo_src} />
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
<<<<<<< HEAD
  console.log(data);
=======
>>>>>>> jun
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