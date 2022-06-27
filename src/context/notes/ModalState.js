import React, { useState } from "react";
import ModalContext from "./ModalContext";

function ModalState(props) {
	const [open, setOpen] = useState(false);

	return (
		<ModalContext.Provider value={{ open, setOpen }}>
			{props.children}
		</ModalContext.Provider>
	);
}

export default ModalState;
