import {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import globalIP from '../services/globalIP';
import loginService from '../services/loginService';


function Login(props){
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  } 

  const passInput = useRef();
  
  const [Ip,setIp] = useState('');
  globalIP.getIP().then(data=>setIp(data));

  const [err,setErr] = useState();

  const login = (event) =>{
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('gip',Ip);
    loginService.login(formData)
        .then(response=>{
            props.loginFun(response.data);
            sessionStorage.setItem("sid", response.data.sid);
            setErr(null);
            navigate('/main');
        })
        .catch(err=>{
            setErr(err.response.data);
        });
  }
  useEffect(()=>{
    globalIP.getIP().then(data=>{setIp(data)});
  },[]);

  const inputFocus = (event)=>{
  if(event.target.innerText === "Show Password"){
      passInput.current.type = "text";
      event.target.innerText = "Hide Password";
  }else{
      passInput.current.type = "password";
      event.target.innerText = "Show Password";
  }
}
  return(
    <>
      <h1>Login Page</h1>
        <form onSubmit={(event) => login(event)}>
          <input type="hidden" name="gip" value={Ip}/>
          <input type="text" name="uName" placeholder="Write username" required/>
          <input type="password" name="pass" ref={passInput}placeholder="Write password" required/>
          <button type='button' onClick={(event)=>inputFocus(event)}>Show Password</button>
          <button type="submit">Login</button>
        </form>
        {err!==null ? <h1>{err}</h1> : null}
      <button onClick={goToRegister}>Create an account</button>
    </>
  )
}
export default Login;