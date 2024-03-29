import React from "react";
import NewNote from "../Content/NewNote";
import Notes from "../Content/Notes";
import ScrollToTop from "../Content/ScrollToTop";

function Home() {
	return (
		<div className="flex flex-col items-center mt-14">
			<NewNote />
			<Notes />
			<ScrollToTop />
		</div>
	);
}

export default Home;
