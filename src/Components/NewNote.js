import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

function NewNote() {
	const context = useContext(noteContext);

	const { addNote } = context;

	const [note, setNote] = useState({ title: "", description: "", tag: "default" });

	const onChange = (event) => {
		setNote({ ...note, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<form className="w-10/12 sm:w-8/12 md:w-[500px] lg:w-[650px] pt-3 ">
				<h2 className="font-semibold text-4xl mb-3">Add a note</h2>
				<div className="mb-6">
					<label htmlFor="title" className="block mb-2 text-sm font-medium">
						Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Title"
						onChange={onChange}
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="description"
						className="block mb-2 text-sm font-medium"
					>
						Description
					</label>
					<input
						type="text"
						id="description"
						name="description"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Description"
						onChange={onChange}
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="tag" className="block mb-2 text-sm font-medium">
						Tag
					</label>
					<input
						type="text"
						id="tag"
						name="tag"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Tag"
						onChange={onChange}
					/>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					onClick={(event) => {
						event.preventDefault();
						addNote(note.title, note.description, note.tag);
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default NewNote;
