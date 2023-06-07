import React, { useState, useRef, useEffect } from "react";
import "../styles/Dropdown.css";
import ArrowDown from "../assets/arrow-up.png";

export default function Dropdown({
	title,
	content,
	dropdownClass,
	visibleClass,
	toggleClass,
	animatedClass,
	hiddenClass,
	imgClass,
	animatedImgClass,
	toggleContentClass,
	large,
}) {
	const [toggle, setToogle] = useState(false);
	const [heightEl, setHeightEl] = useState();

	const toggleState = () => {
		setToogle(!toggle);
	};
	const refHeight = useRef();

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`);
	}, []);

	return (
		<div className={dropdownClass}>
			<div onClick={toggleState} className={visibleClass}>
				<h3>{title}</h3>
				<img src={ArrowDown} alt="fleche descendante" className={toggle ? `${imgClass} ${animatedImgClass}` : imgClass} />
			</div>

			<div
				ref={refHeight}
				className={toggle ? `${toggleClass} ${animatedClass}` : `${toggleClass} ${hiddenClass}`}
				style={large ? (toggle ? { minHeight: `${heightEl}` } : { height: "0px" }) : { minHeight: toggle ? `${heightEl}` : "0px" }}
			>
				<div className={toggleContentClass} aria-hidden={toggle ? "true" : "false"}>
					{content}
				</div>
			</div>
		</div>
	);
}
