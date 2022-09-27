import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoimg from '../img/logo.png';
 
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

  return(
    <>
      <nav class='top-side'>
        {/* <aside className="logo" onClick={goToMain}></aside> */}
        <figure class="intro-photo">
            <img src={logoimg} className="logo" onClick={goToMain} alt="logo photo"/>

        </figure>
        <div>
          <form>
            <input type='text' placeholder="Enter the keyword"/>
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