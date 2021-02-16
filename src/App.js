import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
// import Timer from "./components/Timer";

const items = [
	{
		title: "What is React?",
		content: "React is a frontend javascript library",
	},
	{
		title: "Why use React?",
		content: "React is a favorite JS library among engineers",
	},
	{
		title: "How do you use React?",
		content: "We use react by creating components",
	},
];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "The Color Blue",
		value: "blue",
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>

			<Route path="/list">
				<Search />
			</Route>

			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>

			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
