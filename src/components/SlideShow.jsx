import React, { useState } from "react";     
import "../styles/SlideShow.css"; 
import BtnSlider from "../utils/BtnSlideShow"; 

export default function SlideShow(props) {
	const [slideAnim, setSlideAnim] = useState({ 
		index: 1,                                                                   // je commence par la 1er photo             
		inProgress: false,                                                          // Je "bloque" l'animation afin d'empecher le "spamClick" plus tard j'oblige a attendre 0,4 sec min pour passer a une autre photo
	});

	const nextSlide = () => {
		if (slideAnim.index !== props.img.length && !slideAnim.inProgress) {        // si le 1 de index est different du nombre de photo (du tableau) ET que pas de spamming
			setSlideAnim({ index: slideAnim.index + 1, inProgress: true });         // alors je vais juste augmenter l'index de 1 (je passe à la photo suivante)
			setTimeout(() => {
				setSlideAnim({ index: slideAnim.index + 1, inProgress: false });    // Un délai de 400 millisecondes est ensuite mis en place. (pour éviter spamming)
			}, 400); 
		} else if (slideAnim.index === props.img.length && !slideAnim.inProgress) { // si le chiffre de la photo est egale au nombre de la longueur du tableau (la dernière)
			setSlideAnim({ index: 1, inProgress: true });                           // alors index egal à 1 (en + simple je retourne a la premiere photo)
			setTimeout(() => {
				setSlideAnim({ index: 1, inProgress: false });                      // Un délai de 400 millisecondes est ensuite mis en place. (pour éviter spamming)
			}, 400); 
		}
	};

	const prevSlide = () => {
		if (slideAnim.index !== 1 && !slideAnim.inProgress) {                       // si mon index est autre que 1 alors (+ simple c'est un bouton retour donc on doit etre au minimum a la 2nd)
			setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
			setTimeout(() => {
				setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
			}, 400);
		} else if (slideAnim.index === 1 && !slideAnim.inProgress) {                // Mais si je suis à la premiere photo
			setSlideAnim({ index: props.img.length, inProgress: true });             // je retourne a la derniere photo
			setTimeout(() => {
				setSlideAnim({ index: props.img.length, inProgress: false });
			}, 400);
		}
	};

	return (
		<div className="container-slider">
			{props.img.map((obj, index) => {
				return (
					<div
						key={index}                                                 
						className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
					>
						<img src={obj} alt="Piece de la Maison" />
					</div>
				);
			})}

			{props.img.length > 1 && (
				<>
			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />

			
			<div className="SlideShow-PageNumbers">
				{slideAnim.index} / {props.img.length}
			</div></>
		)}
		</div>
	);
}
