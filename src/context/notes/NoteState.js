import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: "62b44485a5a28b7an56a3895751",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey",
			description: "Updating note",
			tag: "Update",
			date: "2022-06-23T10:46:29.090Z",
			__v: 0,
		},
		{
			_id: "62b6fa421f317cadfv6c92d1a82",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
		{
			_id: "62b6fa421f31cadq6f6c92d1a83",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
		{
			_id: "62b6fa421f31cadf5b6c92d1a84",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
		{
			_id: "62b6fa421f31cxadf36c92d1a85",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
		{
			_id: "62b6fa421gf31cad2f6c92d1a86",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
		{
			_id: "62b6fa421sf31ca4df6c92d1a87",
			user: "62b343f91d5f1383a6e92a65",
			title: "Hey2",
			description: "Updating note 2",
			tag: "Update",
			date: "2022-06-25T12:06:26.830Z",
			__v: 0,
		},
		{
			_id: "62b6fa421f31cadfd6c92d12a88",
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
