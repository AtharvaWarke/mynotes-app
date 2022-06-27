import React from "react";
import NewNote from "./NewNote";
import Notes from "./Notes";
import Modal from "./Modal";

function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<NewNote />
			<Modal />
			<Notes />
		</div>
	);
}

export default Home;
