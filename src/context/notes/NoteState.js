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

		const _note = {
			_id: "62b6fa421f31cadfd36c92d12a88",
			user: "62b343f91d5f1383a6e92a65",
			title: title,
			description: description,
			tag: tag,
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		};
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
		const json = response.json();
		console.log(json);
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
		const json = response.json();

		for (let i = 0; i < note.length; i++) {
			const element = note[i];
			if (element._id === id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		}
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
