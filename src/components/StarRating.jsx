import "../styles/StarRating.css";
import OrangeStar from "../assets/OrangeStar.png";
import LightGreyStar from "../assets/LightGreyStar.png";

export default function StarRating(props) {
  return (
    <div className="starRating ">
      {Array.from({ length: props.starValue }).map(function(_, index) {        // je retourne (props) le nombre etoiles (rating)
        return <img src={OrangeStar} key={index} alt="Etoile orange" />;
      })}
      {Array.from({ length: 5 - props.starValue }).map(function(_, index) {    // Sachant que noté sur 5 étoiles (5 - E orange = E silver)
        return <img src={LightGreyStar} key={index} alt="Etoile grise claire" />;
      })}
    </div>
  );
}

