import Dropdown from "./Dropdown";

export default function MiniDropdown(props) {
	return (
		<Dropdown
			title={props.title}
			content={props.content}
			dropdownClass="mini-Dropdown"
			visibleClass="mini-Dropdown-visible"
			toggleClass="mini-Dropdown-toggle"
			animatedClass="dropdown-animated"
			hiddenClass="mini-Dropdown-toggle-box-hidden"
			imgClass="mini-Dropdown-visible img"
			animatedImgClass="dropdown-arrow-animated"
			toggleContentClass=""
		/>
	);
}
