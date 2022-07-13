import React, { useContext, useState } from "react";
import noteContext from "../../context/notes/NoteContext";

function NewNote() {
	const context = useContext(noteContext);

	const { addNote } = context;

	const [note, setNote] = useState({
		title: "",
		description: "",
		tag: "",
	});

	const onChange = (event) => {
		setNote({ ...note, [event.target.name]: event.target.value });
	};

	return (
		<div className="py-2 px-2 w-auto ">
			<form className="bg-white shadow-lg rounded-lg md:w-[61vw] lg:w-[650px] px-14 pt-4 pb-8 border-2 border-gray-100">
				<div className="flex justify-center">
					<h2 className="font-semibold text-4xl mb-3">Add a note</h2>
				</div>
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
						value={note.title}
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
						value={note.description}
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
						value={note.tag}
					/>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center lg:w-2/5"
						onClick={(event) => {
							event.preventDefault();
							addNote(note.title, note.description, note.tag);
							setNote({
								title: "",
								description: "",
								tag: "",
							});
						}}
					>
						Add Note
					</button>
				</div>
			</form>
		</div>
	);
}

export default NewNote;
