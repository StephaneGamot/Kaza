import "../styles/Avatar.css";

export default function Avatar({className, picture, name}) {
    return (
        <div className={className}>
            <div className={`Avatar-PicFace ${className}`}>
                <img src={picture} alt="propriétaire" />
            </div>
            <div className={`Avatar-NomPrenom ${className}`}>{name}</div>
        </div>
    );
}
