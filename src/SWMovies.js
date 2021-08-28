import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SWMovies() {
	const baseUrl = "https://swapi.dev/api/films/";
	const [ number, setNumber ] = useState(1);
	const [ movie, setMovie ] = useState("");
	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(`${baseUrl}${number}/`);
            setMovie(data);
            console.log(data);
			
		}
		fetchData();
	}, [number]);
	return (
		<div>
			<h1>Pick a Movie</h1>
			<h2>You choose {movie.title}</h2>
            <p>{movie.opening_crawl}</p>
			<select value={number} onChange={e => setNumber(e.target.value)}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
			</select>
		</div>
	);
}
