import "./App.css";
import Navbar from "./components/Content/Navbar";
import Home from "./components/Pages/Home";
import NoteState from "./context/notes/NoteState";
import ModalState from "./context/modal/ModalState";
import About from "./components/Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<NoteState>
				<ModalState>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route index element={<Home />} />
							<Route path="about" element={<About />} />
						</Routes>
					</BrowserRouter>
				</ModalState>
			</NoteState>
		</>
	);
}

export default App;
