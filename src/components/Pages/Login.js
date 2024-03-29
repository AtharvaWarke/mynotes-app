import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../../context/alert/AlertContext";

function Login() {
	const context = useContext(alertContext);
	const { showAlert } = context;

	let navigate = useNavigate();

	const handleLogin = async (event) => {
		event.preventDefault();
		const response = await fetch("https://mynotes-mern-app.herokuapp.com/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: creds.email, password: creds.password }),
		});
		const json = await response.json();
		console.log(json);
		if (json.success) {
			localStorage.setItem("auth-token", json.autentication_token);
			console.log("item", localStorage.getItem("auth-token"));
			showAlert("Logged in", true);
			navigate("/");
		} else {
			showAlert("Incorrect username or password.", false);
		}
	};

	const [creds, setCreds] = useState({
		email: "",
		password: "",
	});

	const onChange = (event) => {
		setCreds({ ...creds, [event.target.name]: event.target.value });
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-full max-w-xs">
				<form
					className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
					onSubmit={handleLogin}
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							name="email"
							type="emails"
							placeholder="Email"
							value={creds.email}
							onChange={onChange}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							name="password"
							type="password"
							placeholder="******************"
							value={creds.password}
							onChange={onChange}
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-light text-sm text-blue-500 hover:text-blue-800"
							href="/"
						>
							Forgot Password?
						</a>
					</div>

					<div className="flex pt-4">
						<p className="font-llight text-sm" href="#">
							Don't have an account?
						</p>
						<a
							className="font-light text-sm text-blue-500 hover:text-blue-800 ml-1"
							href="/Signup"
						>
							Sign up
						</a>
					</div>
				</form>
				<p className="text-center text-gray-500 text-xs">
					&copy;2022 Atharva Warke Corp. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Login;
