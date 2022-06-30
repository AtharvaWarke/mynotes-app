import React, { useState } from "react";
import modalContext from "./ModalContext";

const ModalState = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<modalContext.Provider value={{ open, setOpen }}>
			{props.children}
		</modalContext.Provider>
	);
};

export default ModalState;
