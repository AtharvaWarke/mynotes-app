import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
	const host = "http://localhost:4000/api/notes";
	const notesInitial = [];

	const [note, setNote] = useState(notesInitial);

	const getNote = async () => {
		const response = await fetch(`${host}/fetchnotes`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQzZjkxZDVmMTM4M2E2ZTkyYTY1In0sImlhdCI6MTY1NTk3MDg3MH0.n8JEA9Yy7_pYtZj2YL0vqK0m67M0EixWjusEEwQIA6A",
			},
		});
		const json = await response.json();
		setNote(json);
	};

	const addNote = async (title, description, tag) => {
		const response = await fetch(`${host}/addNote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQzZjkxZDVmMTM4M2E2ZTkyYTY1In0sImlhdCI6MTY1NTk3MDg3MH0.n8JEA9Yy7_pYtZj2YL0vqK0m67M0EixWjusEEwQIA6A",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const _note = await response.json();
		setNote(note.concat(_note));
	};

	const deleteNote = async (id) => {
		const response = await fetch(`${host}/delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQzZjkxZDVmMTM4M2E2ZTkyYTY1In0sImlhdCI6MTY1NTk3MDg3MH0.n8JEA9Yy7_pYtZj2YL0vqK0m67M0EixWjusEEwQIA6A",
			},
		});
		// eslint-disable-next-line
		const json = response.json();

		const remainingNote = note.filter((note) => {
			return note._id !== id;
		});
		setNote(remainingNote);
	};

	const editNote = async (id, title, description, tag) => {
		const response = await fetch(`${host}/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQzZjkxZDVmMTM4M2E2ZTkyYTY1In0sImlhdCI6MTY1NTk3MDg3MH0.n8JEA9Yy7_pYtZj2YL0vqK0m67M0EixWjusEEwQIA6A",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		// eslint-disable-next-line
		const json = response.json();

		let newNote = JSON.parse(JSON.stringify(note));

		for (let i = 0; i < newNote.length; i++) {
			const element = newNote[i];
			if (element._id === id) {
				newNote[i].title = title;
				newNote[i].description = description;
				newNote[i].tag = tag;
				break;
			}
		}
		setNote(newNote);
	};

	return (
		<NoteContext.Provider
			value={{ note, addNote, deleteNote, editNote, getNote }}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
