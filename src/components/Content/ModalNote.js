import { Fragment, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import modalNoteContext from "../../context/modal/ModalNoteContext";
// import noteContext from "../../context/notes/NoteContext";

export default function Modal({ note }) {
	const context = useContext(modalNoteContext);

	const { open_2, setOpen_2 } = context;

	const cancelButtonRef = useRef(null);

	// const onChange = (event) => {
	// 	updateNote({
	// 		...currentNote,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

	// const context_2 = useContext(noteContext);

	// const { editNote } = context_2;

	return (
		<Transition.Root show={open_2} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen_2}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
				</Transition.Child>

				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-center justify-center min-h-full p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-screen md:max-w-xl">
								<div className="bg-white">
									<div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 bg-white">
										<div className="px-6 py-4">
											<div className="font-bold text-xl mb-2">{note.title}</div>
											<div className="overflow-y-scroll max-h-72">
												<p className="text-gray-700 text-base">
													{note.description}
												</p>
											</div>
										</div>
										<div className="px-6 pt-4 pb-2 mb-3 flex">
											<p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
												{note.tag}
											</p>
											{/* <PencilAltIcon
												className="w-6 mx-4 cursor-pointer"
												onClick={() => {
													updateNote(note);
													setOpen_2(true);
												}}
											/>
											<TrashIcon
												className="w-6 mx-4 cursor-pointer"
												onClick={() => {
													deleteNote(note._id);
												}}
											/> */}
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen_2(false)}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
