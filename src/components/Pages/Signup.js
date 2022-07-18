import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
	let navigate = useNavigate();

	const [passcheck, setPasscheck] = useState(true);

	const handleLogin = async (event) => {
		event.preventDefault();
		if (creds.password === creds.cnfrmPassword) {
			setPasscheck(true);
			const response = await fetch(
				"http://localhost:4000/api/auth/createUser",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: creds.name,
						email: creds.email,
						password: creds.password,
					}),
				}
			);
			const json = await response.json();
			console.log(json);
			if (json.success) {
				localStorage.setItem("auth-token", json.autentication_token);
				navigate("/");
			} else {
			}
		} else {
			setPasscheck(false);
			console.log("incorrect");
		}
	};

	const [creds, setCreds] = useState({
		name: "",
		email: "",
		password: "",
		cnfrmPassword: "",
	});

	const onChange = (event) => {
		setCreds({ ...creds, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		localStorage.removeItem("auth-token");
	}, []);

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-full max-w-xs">
				<form
					className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
					onSubmit={handleLogin}
				>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name"
						>
							Your Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="name"
							name="name"
							placeholder="Your Name"
							onChange={onChange}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							onChange={onChange}
						/>
					</div>
					<div className="mb-2">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							name="password"
							placeholder="******************"
							onChange={onChange}
							autoComplete="new-password"
						/>
						{!passcheck ? (
							<p className="text-xs mt-1 text-red-600 font-light">
								Password doesn't match!
							</p>
						) : (
							<p></p>
						)}
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="cnfrmPassword"
						>
							Confirmed Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="cnfrmPassword"
							type="password"
							name="cnfrmPassword"
							placeholder="******************"
							onChange={onChange}
							autoComplete="new-password"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign Up
						</button>
					</div>
					<div className="flex pt-4">
						<p className="font-llight text-sm" href="#">
							Already have an account?
						</p>
						<a
							className="font-light text-sm text-blue-500 hover:text-blue-800 ml-1"
							href="/Login"
						>
							Log in
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

export default Signup;
