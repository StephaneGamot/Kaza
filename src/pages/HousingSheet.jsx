import "../styles/HousingSheet.css";
import MiniDropdown from "../components/MiniDropdown";
import { useParams } from "react-router-dom";
import FlatDetails from "../data/FlatDetails.json";
import StarRating from "../components/StarRating";
import SlideShow from "../components/SlideShow";
import Avatar from "../components/Avatar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function HousingSheet() {
	const { id } = useParams();
	const flatChosen = FlatDetails.findIndex((obj) => obj.id === id);
	console.log(flatChosen);
	const navigate = useNavigate();

	useEffect(() => {
		if (flatChosen === -1) {
			navigate("/error");
		}
	}, [flatChosen, navigate]);

	if (flatChosen === -1) {
		return null;
	}
	const flat = FlatDetails[flatChosen];

	return (
		<div className="Location-main">
			<div className="Location-Carrousel">
				<SlideShow img={flat.pictures} id={flat.id} />
			</div>

			<div className="titre-PicFace">
				<h1>{flat.title}</h1>
				<Avatar className="desktopVersion" name={flat.host.name} picture={flat.host.picture} key={flat.host.name} />
			</div>

			<h2>{flat.location}</h2>
			<div className="Location-space-between">
				<div className="flex">
					{flat.tags.map((tag, index) => (
						<div className="Location-Tag" key={index}>
							<h4>{tag}</h4>
						</div>
					))}
				</div>

				<div className="Location-Rate-Desktop">
					<StarRating id={flat.id} starValue={flat.rating} />
				</div>
			</div>

			<div className="Stars-Name-Pic">
				<div className="Location-Rate-Mobile">
					<StarRating starValue={flat.rating} key={flat.rating + id} id={flat.id} />
				</div>{" "}
				<div className="Location-Avatar-container">
					<Avatar className="mobileVersion" name={flat.host.name} picture={flat.host.picture} key={flat.host.name} />
				</div>
			</div>

			<div className="Location-DropDown-space-between ">
				<MiniDropdown title="Description" content={<p>{flat.description}</p>} />
				<MiniDropdown
					title="Equipement"
					content={
						<ul>
							{flat.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						</ul>
					}
				/>
			</div>
		</div>
	);
}
