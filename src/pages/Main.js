import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import imgLoadSrv from '../services/postLoadSrv';

function Content(){
  const navigate = useNavigate();
  const [PostData,setPost] = useState([]);
  const goToPostDetail = (idx) => {
    // console.log(imgData);
    // console.log(idx);
    sessionStorage.setItem('pData', JSON.stringify(PostData));
    navigate("/postdetail",{state: idx} );
  };
  imgLoadSrv.loadMainPost()
    .then(response =>{
      setPost(response.data);
    })
    .catch(err=>{
      console.log(err);
    });
  return(
    <>
      {PostData.map((value, idx) => (
        <figure key={idx} className="content" onClick={()=>goToPostDetail(idx)}>
          <img src ={value.photo_src} alt ={'img_'+idx}/>
          <figcaption>
            <h6>Tags</h6>
            <p>{value.tags}</p>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

function Main(){
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