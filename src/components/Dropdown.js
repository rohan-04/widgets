import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current && ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener("click", onBodyClick, { capture: true });

		return () => {
			// when the component is not shown on the screen, at that time this cleanup will be invoked
			document.body.removeEventListener("click", onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {
					// console.log("ITEM CLICK");
					onSelectedChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
			{/* <p style={{ color: `${selected.value}` }}>
				This is {selected.value} color.
			</p> */}
		</div>
	);
};

export default Dropdown;
