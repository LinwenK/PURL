import { Outlet, Link, useNavigate } from "react-router-dom";

const RoutingLayout = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  }
  const logout = () => {
    navigate("/");
  }
  return(
    <>
      <nav>
        <aside className="logo" onClick={goToMain}></aside>
        <div>
          <form>
            <input type='text' placeholder="Enter the keyword"/>
            <button type="submit">Search</button>
          </form>
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