import React from "react";
import NewNote from "../Content/NewNote";
import Notes from "../Content/Notes";

function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<NewNote />
			<Notes />
		</div>
	);
}

export default Home;
