import {useEffect, useState, useRef} from 'react';

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

  const [user,setUser] = useState('');
  const [loginFlag,setLogin] = useState(false);
  
  const [Ip,setIp] = useState('');
  globalIP.getIP().then(data=>setIp(data));

  const [err,setErr] = useState();

  const login = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append('gip',Ip);
        loginService.login(formData)
            .then(response=>{
                setLogin(true);
                props.loginFun(response.data);
                sessionStorage.setItem("sid", response.data.sid);
                // sessionStorage.setItem("user_id", response.data.user_id);

                setErr(null);
                navigate('/main');
            })
            .catch(err=>{
                setErr(err.response.data);
            });

        // const form = $(event.target);
        // $.ajax({
        //   type: "POST",
        //   url: form.attr('action'),
        //   data: form.serialize(),
        //   success(response) {
        //       if(response !== "false"){
        //         setUser(JSON.parse(response));
        //         navigate('/main');
        //       }
        //       else{
        //         setUser({user_id:"Invalid Email/Password"});
        //         setLoginFlag(false);
        //           navigate('/');

        //       }
        //   }
          
      // })
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

      <form action="http://localhost/PURL/ReactServer/login.php" method="POST" onSubmit={(event) => login(event)}>

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