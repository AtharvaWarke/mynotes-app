import React, { useContext } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import noteContext from "../../context/notes/NoteContext";
import modalContext from "../../context/modal/ModalContext";
import TextTruncate from "react-text-truncate";
import modalNoteContext from "../../context/modal/ModalNoteContext";

function IndNote({ note, updateNote }) {
	const context = useContext(noteContext);
	const context_2 = useContext(modalContext);
	const context_3 = useContext(modalNoteContext);

	const { deleteNote } = context;
	const { setOpen } = context_2;
	const { setOpen_2 } = context_3;

	return (
		<div className="">
			<div className="w-[18rem] max-h-[18rem] mb-5 rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 bg-white">
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{note.title}</div>
					<p className="text-gray-700 text-base">
						<TextTruncate
							line={5}
							element="span"
							truncateText="…"
							text={note.description}
							textTruncateChild={
								<a
								onClick={() => {
									setOpen_2(true);
									console.log("clicked")
								}}
								>
									Read on
								</a>
							}
						></TextTruncate>
					</p>
				</div>
				<div className="px-6 pt-4 pb-2 mb-3 flex">
					<p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						{note.tag}
					</p>
					<PencilAltIcon
						className="w-6 mx-4 cursor-pointer"
						onClick={() => {
							updateNote(note);
							setOpen(true);
						}}
					/>
					<TrashIcon
						className="w-6 mx-4 cursor-pointer"
						onClick={() => {
							deleteNote(note._id);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default IndNote;
