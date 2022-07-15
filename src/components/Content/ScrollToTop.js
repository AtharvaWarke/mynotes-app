import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";

function ScrollToTop() {
    // from geeksforgeeks
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};
	window.addEventListener("scroll", toggleVisible);
	return (
		<button
			className="w-12 text-gray-600 fixed bottom-0 pb-5"
			onClick={scrollToTop}
			style={{ display: visible ? "inline" : "none" }}
		>
			<ChevronUpIcon />
		</button>
	);
}

export default ScrollToTop;
