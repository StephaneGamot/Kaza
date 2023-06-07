import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Logement from "./pages/HousingSheet";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/error" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/logement/:id" element={<Logement />} />	
			</Routes>
			<Footer />
		</div>
	);
}

