import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import editUserSrv from '../services/editUserSrv';

function EditUser(props) {
  let userData = props.User;
  const navigate = useNavigate();

	const [input, setInput] = useState({
		email: userData.email,
    dob: userData.birthday,
    gender: userData.gender
	});

  const editUserFunc = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("uid", userData.user_uid);

    editUserSrv.edit(formData)
    .then(response =>{
      console.log(response);
      if(response.data == "DONE"){
        props.editUserFun(p=>{
          return({...p, email:input.email, dob:input.dob, gender:input.gender})
        })
        navigate("/main")
      }
    })
    .catch(err=>{
      console.log(err);
    });
  }
	

	const onInputChange = (e) => {
		const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
		// validateInput(e);
	};
  // const validateInput = (e) => {
  //   let { name, value } = e.target;
  //   setError(prev => {
  //     	const stateObj = { ...prev, [name]: "" };
  //   	switch (name) {
	// 		case "uName":
	// 			if (!value) {
	// 			stateObj[name] = "Please enter new Username.";
	// 			}
	// 		break;
	// 		case "email":
	// 			if (!value) {
	// 			stateObj[name] = "Please enter new Email.";
	// 			}
	// 		break;
	// 		case "pass":
	// 			if (!value) {
	// 			stateObj[name] = "Please enter new Password.";
	// 			} else if (input.confirmPass && value !== input.confirmPass) {
	// 			stateObj["confirmPass"] = "Password and Confirm Password does not match.";
	// 			} else {
	// 			stateObj["confirmPass"] = input.confirmPass ? "" : error.confirmPass;
	// 			}
	// 		break;
	// 		case "confirmPass":
	// 			if (!value) {
	// 			stateObj[name] = "Please confirm the new Password.";
	// 			} else if (input.pass && value !== input.pass) {
	// 			stateObj[name] = "Password and Confirm Password does not match.";
	// 			}
	// 		break;
	// 		default:
	// 		break;
  //     	}
  //     	return stateObj;
  //   });
  // };
  return (
    <form method='POST' onSubmit={(event)=>editUserFunc(event)}>
		  <input type='email' name='email' placeholder='Enter new email' value={input.email} onChange={onInputChange}
			required/>
		  <input type='date' name='dob' value={input.dob} required></input>
		  <select name='gender' required>
        <option defaultValue={input.gender} disabled>Gender</option>
        <option defaultValue={input.gender}>Female</option>
        <option defaultValue={input.gender}>Male</option>
        <option defaultValue={input.gender}>Non-binary</option>
        <option defaultValue={input.gender}>Other</option>
        <option defaultValue={input.gender}>Prefer not to say</option>
		  </select>
      <button type='submit'>Submit</button> 
    </form>
  );
};
export default EditUser;