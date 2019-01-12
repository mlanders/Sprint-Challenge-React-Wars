import React from 'react';

function Film(props) {
	let x = props.film;
	console.log(x);
	let num = x.slice(27, 28);
	console.log(num);

	// The following line is throwing an error
	// let title = props.filmAPI[num].title;

	// console.log(title);

	return <div>{/* <p>Film: {props.filmAPI[1].title}</p> */}</div>;
}

export default Film;
