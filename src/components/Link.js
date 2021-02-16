import React from "react";

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		// this are the boolean to indicate command in mac or control in windows keys are pressed or not
		if (event.metaKey || event.ctrlKey) {
			return; // dont run the below code just do the normal browser behaviour
		}

		// Step1: prevent refresh
		event.preventDefault(); // to avoid refreshing of page

		// Step2: update URL then go to <Route />
		window.history.pushState({}, "", href); // to update the URL without refreshing of page

		// this will communicate with Route components to indicate that the URL has been change
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
