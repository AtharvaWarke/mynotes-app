import React from "react";
import Notes from "./Notes";

function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<form className="w-10/12 sm:w-8/12 md:w-[500px] lg:w-[650px] pt-3 ">
				<h2 className="font-semibold text-4xl mb-3">Add a note</h2>
				<div className="mb-3">
					<label htmlFor="text" className="block mb-2 text-sm font-medium">
						Your email
					</label>
					<input
						type="text"
						id="email"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Title"
						required=""
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="text" className="block mb-2 text-sm font-medium">
						Your password
					</label>
					<input
						type="text"
						id="password"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Description"
						required=""
					/>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
				>
					Submit
				</button>
			</form>
			<Notes/>
		</div>
	);
}

export default Home;
