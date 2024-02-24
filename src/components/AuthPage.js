import React, { useState } from 'react';
import { signInRequest } from '../api';

const Auth = ( {page, label} ) => {
	const [loginData, setLoginData] = useState({
		login: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData((prevData) => ({
			...prevData,
			[name]: value,
    	}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signInRequest(loginData);
	};

	return (
		<div>
			<h2>{label}</h2>
			<form onSubmit={handleSubmit}>
			<label>
			  	Login:
			  	<input
					type="text"
					name="login"
					value={loginData.login}
					onChange={handleChange}
				/>
			</label>
			<br/>
			<label>
				Password:
				<input
					type="password"
					name="password"
					value={loginData.password}
					onChange={handleChange}
				/>
			</label>
			<br/>
			<button type="submit"> sign in </button>
		  	</form>
		</div>
	);
}

export default Auth;