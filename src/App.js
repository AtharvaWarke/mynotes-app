import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<NoteState>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</NoteState>
		</>
	);
}

export default App;
