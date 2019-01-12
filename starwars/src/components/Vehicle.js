import React from 'react';

function Vehicle(props) {
	let x = props.vehicle;
	// console.log(x);
	let num = x.slice(30, 32);
	// console.log(num);
	if (num > 10) {
		//wasn't able to go through all pages in the API and all vehicles in the first 10 people are on pages 2 and beyond of the vehicle API
		num = 'Classified';
	} else {
		{
			props.vehicleAPI[num].name;
		}
	}
	return (
		<div>
			{/* <p>{props.vehicle}</p> */}
			<p>Vehicle: {num}</p>
		</div>
	);
}

export default Vehicle;
