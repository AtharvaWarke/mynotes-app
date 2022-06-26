import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import IndNote from "./IndNote";

function Notes() {
	const context = useContext(noteContext);
	const { note, addNote } = context;
	return (
		<div className="flex justify-evenly flex-wrap w-screen mt-12">
			{note.map((notes) => {
				return <IndNote key={notes._id} note={notes} />;
			})}
		</div>
	);
}

export default Notes;
