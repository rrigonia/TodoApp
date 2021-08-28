import React, { useState, useEffect } from "react";

export default function Clicker() {
	const [ count, setCount ] = useState(0);
	useEffect(() => {
		document.title = `Clicked me ${count} times!`;
	});
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Clicked Me {count}</button>
		</div>
	);
}
