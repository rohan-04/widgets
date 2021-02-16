import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	// Step5: update the path so that it can render
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		// Step3: Add event listener
		window.addEventListener("popstate", onLocationChange);
		return () => {
			// Step4: remove event listener when component is not shown
			window.removeEventListener("popstate", onLocationChange);
		};
	});

	return currentPath === path ? children : null;
};

export default Route;
