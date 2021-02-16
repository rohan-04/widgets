import React, { useState } from "react";

const Timer = () => {
	const [currentTime, setCurrentTime] = useState("");

	setInterval(() => {
		const d = new Date();
		setCurrentTime(d.getUTCHours());
	}, 1000);

	return (
		<div>
			<h1>{currentTime}</h1>
		</div>
	);
};

export default Timer;
