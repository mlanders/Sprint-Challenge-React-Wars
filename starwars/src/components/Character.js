import React from 'react';
import './StarWars.css';
import Vehicle from './Vehicle';
import Film from './Film';

function Character(props) {
	return (
		<div className="character">
			<span className="name">{props.char.name}</span>
			<span>DOB: {props.char.birth_year}</span>
			<span>Gender: {props.char.gender}</span>
			<span>Height: {props.char.height}</span>
			<span>Mass: {props.char.mass}</span>
			<ul>
				{props.char.vehicles.map(vehicle => {
					return (
						<Vehicle
							key={props.created}
							vehicle={vehicle}
							vehicleAPI={props.vehicle}
						/>
					);
				})}
			</ul>
			<ul>
				{props.char.films.map(film => {
					return (
						<Film
							key={props.created}
							film={film}
							filmAPI={props.films}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default Character;
