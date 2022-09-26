import { useState } from 'react';
import editUserSrv from '../service/editUserSrv';
function EditUser() {
	const [input, setInput] = useState({
		uName: '',
		email: '',
		pass: '',
		confirmPass: ''
	});
	const [error, setError] = useState({
		uName: '',
		email: '',
		pass: '',
		confirmPass: ''
	});

	editUserSrv.edit()
	.then(response =>{
		console.log(response);
	})
	.catch(err=>{
		console.log(err);
	});
	

	const onInputChange = (e) => {
		const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
		validateInput(e);
	};
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError(prev => {
      	const stateObj = { ...prev, [name]: "" };
    	switch (name) {
			case "uName":
				if (!value) {
				stateObj[name] = "Please enter new Username.";
				}
			break;
			case "email":
				if (!value) {
				stateObj[name] = "Please enter new Email.";
				}
			break;
			case "pass":
				if (!value) {
				stateObj[name] = "Please enter new Password.";
				} else if (input.confirmPass && value !== input.confirmPass) {
				stateObj["confirmPass"] = "Password and Confirm Password does not match.";
				} else {
				stateObj["confirmPass"] = input.confirmPass ? "" : error.confirmPass;
				}
			break;
			case "confirmPass":
				if (!value) {
				stateObj[name] = "Please confirm the new Password.";
				} else if (input.pass && value !== input.pass) {
				stateObj[name] = "Password and Confirm Password does not match.";
				}
			break;
			default:
			break;
      	}
      	return stateObj;
    });
  };
  return (
      <form method='POST'>
        <input
			type="text"
			name="uName"
			placeholder='Enter Username'
			value={input.uName}
			onChange={onInputChange}
			onBlur={validateInput}required></input>
			{error.uName && <span>{error.uName}</span>}
		<input
			type='email'
			name='email'
			placeholder='Enter new email'
			value={input.email}
			onChange={onInputChange}
			onBlur={validateInput}required></input>
			{error.email && <span>{error.email}</span>}
        <input
			type="password"
			name="pass"
			placeholder='Enter Password'
			value={input.pass}
			onChange={onInputChange}
			onBlur={validateInput}required></input>
			{error.pass && <span>{error.pass}</span>}
        <input
			type="password"
			name="confirmPass"
			placeholder='Confirm Password'
			value={input.confirmPass}
			onChange={onInputChange}
			onBlur={validateInput}required></input>
			{error.confirmPass && <span>{error.confirmPass}</span>}
		<input 
			type='date'
			name='dob'
			required></input>
		<select name='gender' required>
			<option value='' selected disabled>Gender</option>
			<option value='Female'>Female</option>
			<option value='Male'>Male</option>
			<option value='Non-binary'>Non-binary</option>
			<option value='Other'>Other</option>
			<option value='P-not-say'>Prefer not to say</option>
		</select>
        <button type='submit'>Submit</button> 
      </form>
  );
};
export default EditUser;