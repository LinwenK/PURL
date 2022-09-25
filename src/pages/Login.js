import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import globalIP from '../services/globalIP';


function Login(props){
  const navigate = useNavigate();
 
  const goToRegister = () => {
    navigate("/register");
  } 


  const [user,setUser] = useState('');
  const [loginFlag,setLoginFlag] = useState(false);
  
  const [Ip,setIp] = useState('');
  globalIP.getIP().then(data=>setIp(data));

  const [err,setErr] = useState();

  const login = (event) =>{
        event.preventDefault();
        const form = $(event.target);
        $.ajax({
          type: "POST",
          url: form.attr('action'),
          data: form.serialize(),
          success(response) {
              if(response !== "false"){
                setUser(JSON.parse(response));
                navigate('/main');
              }
              else{
                setUser({user_id:"Invalid Email/Password"});
                setLoginFlag(false);
                  navigate('/');

              }
          }
          
      })
    }
  return(
    <>
      <h1>Login Page</h1>

      <form action="http://localhost/PURL/ReactServer/login.php" method="POST" onSubmit={(event) => login(event)}>
                <input type="hidden" name="gip" value={Ip}/>

                <input type="text" name="uName" placeholder="Write username" required/>
                <input type="password" name="pass" placeholder="Write password" required/>
                <button type="submit">Login</button>
          
            </form>



      <button onClick={goToRegister}>Create an account</button>
    </>
  )
}
export default Login;