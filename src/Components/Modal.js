import { Fragment, useRef, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import modalContext from "../context/notes/ModalContext";
import { useEffect } from "react";

export default function Modal({ currentNote, updateNote }) {
	const context = useContext(modalContext);

	const { open, setOpen } = context;

	const cancelButtonRef = useRef(null);

	const onChange = (event) => {
		updateNote({
			...currentNote,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
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
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-lg leading-6 font-medium text-gray-900"
											>
												Deactivate account
											</Dialog.Title>
											<form className="w-10/12 sm:w-8/12 md:w-[500px] lg:w-[650px] pt-3 ">
												<h2 className="font-semibold text-4xl mb-3">
													Add a note
												</h2>
												<div className="mb-6">
													<label
														htmlFor="title"
														className="block mb-2 text-sm font-medium"
													>
														Title
													</label>
													<input
														type="text"
														id="title"
														name="title"
														className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
														placeholder="Title"
														onChange={onChange}
														value={currentNote.title}
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
														value={currentNote.description}
													/>
												</div>
												<div className="mb-6">
													<label
														htmlFor="tag"
														className="block mb-2 text-sm font-medium"
													>
														Tag
													</label>
													<input
														type="text"
														id="tag"
														name="tag"
														className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
														placeholder="Tag"
														onChange={onChange}
														value={currentNote.tag}
													/>
												</div>
												<button
													type="submit"
													className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
													onClick={(event) => {
														event.preventDefault();
														console.log("updating note_1", currentNote);
														// addNote(note.title, note.description, note.tag);
													}}
												>
													Update Note
												</button>
											</form>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
									>
										Deactivate
									</button>
									<button
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
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
