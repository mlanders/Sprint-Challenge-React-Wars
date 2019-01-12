import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			vehicles: [],
			films: []
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
		this.getVehicles('https://swapi.co/api/vehicles/');
		this.getFilms('https://swapi.co/api/films/');
	}

	getCharacters = URL => {
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ starwarsChars: data.results });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	getVehicles = URL => {
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ vehicles: data.results });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	getFilms = URL => {
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ films: data.results });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<CharacterList
					characterList={this.state.starwarsChars}
					vehicles={this.state.vehicles}
					films={this.state.films}
				/>
			</div>
		);
	}
}

export default App;

// birth_year:"19BBY"
// created:"2014-12-09T13:50:51.644000Z"
// edited:"2014-12-20T21:17:56.891000Z"
// eye_color:"blue"
// films:Array[5]
// 0:"https://swapi.co/api/films/2/"
// 1:"https://swapi.co/api/films/6/"
// 2:"https://swapi.co/api/films/3/"
// 3:"https://swapi.co/api/films/1/"
// 4:"https://swapi.co/api/films/7/"
// gender:"male"
// hair_color:"blond"
// height:"172"
// homeworld:"https://swapi.co/api/planets/1/"
// mass:"77"
// name: Luke Skywalker"
// skin_color:"fair"
// species:Array[1]
// 0:"https://swapi.co/api/species/1/"
// starships:Array[2]
// 0:"https://swapi.co/api/starships/12/"
// 1:"https://swapi.co/api/starships/22/"
// url:"https://swapi.co/api/people/1/"
// vehicles:Array[2]
// 0:"https://swapi.co/api/vehicles/14/"
// 1:"https://swapi.co/api/vehicles/30/"
