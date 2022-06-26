import React from "react";
import NewNote from "./NewNote";
import Notes from "./Notes";

function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<NewNote />
			<Notes />
		</div>
	);
}

export default Home;
