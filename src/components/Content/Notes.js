import React, { useContext, useEffect, useState } from "react";
import noteContext from "../../context/notes/NoteContext";
import IndNote from "./IndNote";
import Modal from "./Modal";

function Notes() {
	const context = useContext(noteContext);

	const { note, getNote } = context;

	useEffect(() => {
		getNote();
		// eslint-disable-next-line
	}, []);

	const [indNote, setIndNote] = useState({
		title: "",
		description: "",
		tag: "",
	});

	const updateNote = (currentNote) => {
		setIndNote(currentNote)
	}

	return (
		<>
			<Modal currentNote={indNote} updateNote={setIndNote}/>
			<div className="flex justify-evenly flex-wrap w-screen mt-12">
				{note.map((notes) => {
					return (
						<IndNote key={notes._id} updateNote={updateNote} note={notes} />
					);
				})}
			</div>
		</>
	);
}

export default Notes;