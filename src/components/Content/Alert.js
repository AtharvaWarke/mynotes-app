import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import alertContext from "../../context/alert/AlertContext";
import { useContext } from "react";

function Alert() {
	const context = useContext(alertContext);
	const { alert, setAlert } = context;
	return (
		<div
			className={`${alert.show ? "" : "hidden"} absolute w-full`}
			role="alert"
		>
			<div
				className={`${
					alert.success
						? "bg-teal-100  border-teal-500 text-teal-900"
						: "bg-red-100 border-red-500 text-red-900"
				} px-4 py-1.5 border-t-4 shadow-md rounded-b`}
			>
				<div className="flex items-center">
					<CheckCircleIcon
						className={`${alert.success ? "block" : "hidden"} h-8 w-8 mr-2`}
					/>
					<InformationCircleIcon
						className={`${alert.success ? "hidden" : "block"} h-8 w-8 mr-2`}
					/>
					<p className="font-bold">{alert.message}</p>
					<button
						className={`${alert.success ? "hidden" : "block"} h-6 w-6 ml-auto`}
						onClick={() => {
							setAlert({ show: false });
						}}
					>
						<XIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Alert;
