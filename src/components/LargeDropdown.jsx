import Dropdown from "./Dropdown";

export default function LargeDropdown(props) {
	return (
		<Dropdown
			large
			title={props.title}
			content={props.content}
			dropdownClass="large-Dropdown"
			visibleClass="large-Dropdown-visible"
			toggleClass="large-Dropdown-toggle"
			animatedClass="dropdown-animated"
			hiddenClass=""
			imgClass="large-Dropdown-visible img"
			animatedImgClass="dropdown-arrow-animated"
			toggleContentClass="large-Dropdown-toggle-p"
		/>
	);
}
