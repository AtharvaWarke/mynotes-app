import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../../context/notes/NoteContext";
import IndNote from "./IndNote";
import Modal from "./Modal";

function Notes() {
	const context = useContext(noteContext);

	const { note, getNote } = context;

	let navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("auth-token")) {
			getNote();
		} else {
			navigate("/Login");
		}
		// eslint-disable-next-line
	}, []);

	const [indNote, setIndNote] = useState({
		title: "",
		description: "",
		tag: "",
	});

	const updateNote = (currentNote) => {
		setIndNote(currentNote);
	};

	return (
		<>
			<Modal currentNote={indNote} updateNote={setIndNote} />
			<div className="flex justify-center flex-wrap w-screen py-4 px-2">
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
