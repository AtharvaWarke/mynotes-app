import "./App.css";
import Navbar from "./components/Content/Navbar";
import Home from "./components/Pages/Home";
import NoteState from "./context/notes/NoteState";
import ModalState from "./context/modal/ModalState";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
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
							<Route path="login" element={<Login />} />
							<Route path="signup" element={<Signup />} />
						</Routes>
					</BrowserRouter>
				</ModalState>
			</NoteState>
		</>
	);
}

export default App;
