import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  }
  return(
    <>
      <h1>Login Page</h1>
      <button onClick={goToRegister}>Create an account</button>
    </>
  )
}
export default Login;