import React from 'react';
import axios from 'axios';
import Film from './Film';
import '../App.css';
import Vehicle from './Vehicle';

class Character extends React.Component {
	constructor(props) {
		super(props);
		this.state = { vehicles: [], films: [], starships: [] };
	}
	componentDidMount() {
		this.props.char.vehicles.map(item => {
			this.getVehicles(item);
		});
		this.props.char.films.map(item => {
			this.getFilms(item);
		});
	}
	getVehicles = URL => {
		axios
			.get(URL)
			.then(data => {
				this.setState({ vehicles: [...this.state.vehicles, data.data.name] });
			})
			.catch(err => {
				console.log(err);
			});
	};

	getFilms = URL => {
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ films: [...this.state.films, data.title] });
			})
			.catch(err => {
				console.log(err);
			});
	};

	getStarships = URL => {
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ starships: data.results });
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		// console.log(this.state);
		return (
			<ul className='character'>
				<span className='name'>{this.props.char.name}</span>
				<li className='listItem'>DOB: {this.props.char.birth_year}</li>
				<li className='listItem'>Gender: {this.props.char.gender}</li>
				<li className='listItem'>Height: {this.props.char.height}</li>
				<li className='listItem'>Mass: {this.props.char.mass}</li>
				<div>
					<Vehicle vehicles={this.state.vehicles} />
					<Film films={this.state.films} />
				</div>
			</ul>
		);
	}
}

export default Character;
