import {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import globalIP from '../services/globalIP';
import registerSrv from '../services/registerSrv';

function Register(props){
  const navigate = useNavigate();
  

  const passInput = useRef(); 

  const [Ip,setIp] = useState('');
  globalIP.getIP().then(data=>setIp(data));

  const [err,setErr] = useState();


  const register = (event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('gip',Ip);
    registerSrv.register(formData)
    // registerSrv.register()

        .then(response=>{
            // props.loginFun(response.data);
            sessionStorage.setItem("sid", response.data.sid);
            setErr(null);
            navigate('/main');
        })
        .catch(err=>{
          navigate('/home');

          // setErr(err.response.data);

        });
      }
    // const form = $(event.target);
    // $.ajax({
    //   type: "POST",
    //   url: form.attr('action'),
    //   data: form.serialize(),
    //   success(response) {
    //     if(response !== "false"){
    //       navigate('/');
    //     }
    //     else{
    //       navigate('/home');
    //     }
    //   }
    // })
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
      <div id="reg">
      {/* <form method="POST" action="http://localhost/PURL/src/php/register.php" onSubmit={(event) => register(event)}> */}
      <form method="POST" onSubmit={(event) => register(event)}>

      <input type="hidden" name="gip" value={Ip}/>

      <label>User ID</label>
      <input name="user_id" placeholder="user id"  required/>

      <label>Password</label>
      <input type="password" name="pass" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*?]).{8,}" required/>
      <p>(At least eight characters, including at least one number/ one lower letters/ one uppercase letters / one special characters)</p>
      <button type='button' onClick={(event)=>inputFocus(event)}>Show Password</button>

      <label>E-mail</label>
      <input type="email" name="email" placeholder="email" required/>

      <label>Gender</label>
      <input name="gender" type = "radio" value="Male" required/>Male
      <input name="gender" type = "radio" value="Female" required/>Female
      <input name="gender" type = "radio" value="Non-binary" required/>Non-binary
      <input name="gender" type = "radio" value="Prefer not to say" required/>Prefer not to say


      <label>Birthday</label>
      <input type="date" name="dob" required/>

      <button type="submit">Register</button>
      </form>
      {/* {err!==null ? <h1>{err}</h1> : null} */}
      </div>

    </>
  )
}
export default Register;