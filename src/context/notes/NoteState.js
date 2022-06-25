import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: "62b44485a5a2b7a56a389575",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey",
			description: "Updating note",
			tag: "Update",
			date: "2022-06-23T10:46:29.090Z",
			__v: 0,
		},
		{
			_id: "62b6fa421f31cadf6c92d1a8",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
	];

	const [note, setNote] = useState(notesInitial);

	return (
		<NoteContext.Provider value={{ note, setNote }}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
