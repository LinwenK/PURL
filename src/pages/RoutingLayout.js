import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import searchPost from "../services/searchPost";
import imgLoadSrv from "../services/imgLoadSrv";

const RoutingLayout = (props) => {
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  }
  
  const logout = () => {
    if(sessionStorage.getItem('sid') != null){
      sessionStorage.removeItem('sid');
      props.LogoutFunc("");
      navigate('/');
    }
  }

  const search = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    searchPost.search(formData)
    .then(response =>{
      if((typeof response.data) == "object"){
        props.setImg(response.data);
        setErr();
      }else{
        setErr(response.data);
        imgLoadSrv.load()
          .then(response =>{
            props.setImg(response.data);
          })
          .catch(err=>{
            console.log(err);
          });
      }
    })
    .catch(err=>{
      console.log(err);
    });
  }

  return(
    <>
      <nav>
        <aside className="logo" onClick={goToMain}></aside>
        <div>
          <form onSubmit={(event)=>search(event)}>
            <input type='text' name="keyword" placeholder="Enter the keyword"/>
            <button type="submit">Search</button>
          </form>
          <details>
            <summary><aside></aside></summary>
            <ul>
              {props.loggedUser == "" ? <li><Link to="/login">Login</Link></li> : null}
              {props.loggedUser == "" ? null : <li><Link to="/addpost">Add a post</Link></li>}
              {props.loggedUser == "" ? null : <li><Link to="/dashboard">Edit post</Link></li>}
              {props.loggedUser == "" ? null : <li><Link to="/edituser">Edit user</Link></li>}
              {props.loggedUser == "" ? null : <li className="logout" onClick={logout}>Logout</li>}
            </ul>
          </details>
        </div>
      </nav>
      {err != null ? <h1>{err}</h1> : null}
      <Outlet/>
    </>
  );
}
export default RoutingLayout;