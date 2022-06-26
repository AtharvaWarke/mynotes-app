import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

function IndNote({ note }) {
	return (
		<div>
			<div className="max-w-sm mb-5 rounded overflow-hidden shadow-lg border-2 border-gray-50">
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{note.title}</div>
					<p className="text-gray-700 text-base">
						{note.description}
						{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
						delectus! Nemo quis, nam temporibus odio quas expedita. Molestias
						cumque ratione tempora adipisci id, incidunt corporis ad, temporibus
						iure voluptatem aliquam dignissimos culpa provident? Repellendus
						pariatur, dignissimos rem impedit cupiditate quas ducimus esse
						eveniet est ea, iure libero eos earum aperiam. */}
					</p>
				</div>
				<div className="px-6 pt-4 pb-2 mb-3 flex">
					<p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						{note.tag}
					</p>
					<PencilAltIcon className="w-6 mx-4" />
					<TrashIcon className="w-6 mx-4" />
				</div>
			</div>
		</div>
	);
}

export default IndNote;
