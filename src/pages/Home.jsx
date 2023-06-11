import React from "react";
import "../styles/Home.css";
import FlatDetails from "../data/FlatDetails.json";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="main">
			<div className="sousCouche"></div>
			<div className="banner">
				<div className="filtreSombre"></div>
				<p>Chez vous, <span className="responsive-break"><br></br></span>partout et ailleurs</p>
			</div>

			<div className="gallery">
				{FlatDetails.map((element) => (
					<Link to={"/logement/" + element.id} key={element.id}>
						<div className={["thumb", "filtreGradient "].join(" ")}>
							<div className="HomeImg" style={{ backgroundImage: `url(${element.cover})` }}></div>
							<p className="thumb-p">{element.title}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
