import "./App.css";
import Navbar from "./components/Content/Navbar";
import Home from "./components/Pages/Home";
import NoteState from "./context/notes/NoteState";
import ModalState from "./context/modal/ModalState";
import AlertState from "./context/alert/AlertState";
import ModalNoteState from "./context/modal/ModalNoteState";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Content/Alert";

function App() {
	return (
		<div className="bg-neutral-50 h-screen">
			<NoteState>
				<ModalState>
					<AlertState>
						<ModalNoteState>
							<BrowserRouter>
									<Navbar />
									<Alert />
								<Routes>
									<Route index element={<Home />} />
									<Route path="about" element={<About />} />
									<Route path="login" element={<Login />} />
									<Route path="signup" element={<Signup />} />
								</Routes>
							</BrowserRouter>
						</ModalNoteState>
					</AlertState>
				</ModalState>
			</NoteState>
		</div>
	);
}

export default App;
