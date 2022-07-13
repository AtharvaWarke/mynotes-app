import React, { useState } from "react";
import modalNoteState from "./ModalNoteContext";

const ModalNoteState = (props) => {
	const [open_2, setOpen_2] = useState(false);

	return (
		<modalNoteState.Provider value={{ open_2, setOpen_2 }}>
			{props.children}
		</modalNoteState.Provider>
	);
};

export default ModalNoteState;
