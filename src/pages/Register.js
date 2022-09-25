import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import globalIP from '../services/globalIP';

function Register(){
  const navigate = useNavigate();


  const [user,setUser] = useState('');
  const [loginFlag,setLoginFlag] = useState(false);
  
  const [Ip,setIp] = useState('');
  globalIP.getIP().then(data=>setIp(data));


  const register = (event) =>{
    event.preventDefault();
    const form = $(event.target);
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      success(response) {
          if(response !== "false"){
            navigate('/main');
          }
          else{
            setLoginFlag(false);
            navigate('/home');

          }
      }
      
  })
  }

  return(
    <>
      <h1>Register Page</h1>
      

        <form method="POST" action="http://localhost/PURL/ReactServer/register.php" onSubmit={(event) => register(event)}>
        <input type="hidden" name="gip" value={Ip}/>

        <label>User ID</label>
        <input name="user_id" placeholder="user id" require/>

        <label>Password</label>
        <input type="password" name="pass" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*?]).{8,}" require/>
        {/* <input type="password" name="pass" placeholder="password" require/> */}
        <p>(At least eight characters, including at least one number/ one lower letters/ one uppercase letters / one special characters)</p>

        <label>E-mail</label>
        <input type="email" name="email" placeholder="email" require/>

        <label>Gender</label>
        <input name="gender" type = "radio" value="Male" require/>Male
        <input name="gender" type = "radio" value="Female" require/>Female
        <input name="gender" type = "radio" value="Non-binary" require/>Female
        <input name="gender" type = "radio" value="Prefer not to say" require/>Female


        <label>Birthday</label>
        <input type="date" name="dob" require/>

        <button type="submit">Register</button>
        </form>


    </>
  )
}
export default Register;