import React, { useState } from "react";
import alertContext from "./AlertContext";

const AlertState = (props) => {
	const [alert, setAlert] = useState({
		message: "",
		success: null,
		show: false,
	});

	const showAlert = (message, success) => {
		setAlert({
			message: message,
			success: success,
			show: true,
		});
		if (success) {
			setTimeout(() => {
				setAlert({ show: false });
			}, 750);
		}
	};

	return (
		<alertContext.Provider value={{ alert, showAlert, setAlert }}>
			{props.children}
		</alertContext.Provider>
	);
};

export default AlertState;
