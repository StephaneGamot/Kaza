import HLOGO from "../assets/Header-LOGO.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
	return (
		<div>
			<header className="header">
				<img src={HLOGO} alt="Logo header" className="logo" />
				<nav>
					<NavLink to="/">Accueil</NavLink>
					<NavLink to="/about">A propos</NavLink>
				</nav>
			</header>
		</div>
	);
}
