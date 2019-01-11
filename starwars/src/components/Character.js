import React from 'react';
import './StarWars.css';
import Vehicle from './Vehicle';

function Character(props) {
	return (
		<div className="character">
			<span className="name">{props.char.name}</span>
			<span>DOB: {props.char.birth_year}</span>
			<span>Gender: {props.char.gender}</span>
			<span>Height: {props.char.height}</span>
			<span>Mass: {props.char.mass}</span>
			{/* <ul>
				{props.char.vehicles.map(vehicle => {
					return (
						<Vehicle vehicle={vehicle} vehicleAPI={props.vehicle} />
					);
				})}
			</ul> */}
		</div>
	);
}

export default Character;
