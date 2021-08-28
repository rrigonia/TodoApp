import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
	// Set a piece of state, based off of value in localStorage;
	const [ state, setState ] = useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			val = defaultVal;
		}
		return val;
	});

	// use useEffect to set my localStorage with my piece of state;
	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state ]
	);
	return [ state, setState ];
}

export default useLocalStorageState;
