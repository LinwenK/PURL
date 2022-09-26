import { Outlet, Link, useNavigate } from "react-router-dom";
import searchPost from "../service/searchPost";

const RoutingLayout = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  }
  const logout = () => {
    navigate("/");
  }

  
  searchPost.search()
	.then(response =>{
		console.log(response);
	})
	.catch(err=>{
		console.log(err);
	});


  return(
    <>
      <nav>
        <aside className="logo" onClick={goToMain}></aside>
        <div>
          
          {/* SEACHBAR */}
          <form method="POST" action="">
            <input type='text' placeholder="Enter the keyword"/>
            <button type="submit">Search</button>
          </form>
          {/* SEACHBAR */}

          <details>
            <summary><aside></aside></summary>
            <ul>
              <li><Link to="/addpost">Add a post</Link></li>
              <li><Link to="/dashboard">Edit post</Link></li>
              <li><Link to="/edituser">Edit user</Link></li>
              <li className="logout" onClick={logout}>Logout</li>
            </ul>
          </details>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}
export default RoutingLayout;