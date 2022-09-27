import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import searchPost from "../services/searchPost";

const RoutingLayout = (props) => {
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
    let formData = new FormData();
    searchPost.search(formData)
    .then(response =>{
      console.log(response);
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
            <input type='text' name="key" placeholder="Enter the keyword"/>
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
      <Outlet/>
    </>
  );
}
export default RoutingLayout;