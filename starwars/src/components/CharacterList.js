import React from 'react';
import Character from './Character';

import './StarWars.css';

function CharacterList(props) {
	return (
		<div className="characterList">
			{props.characterList.map(char => {
				return <Character char={char} vehicle={props.vehicles} />;
			})}
		</div>
	);
}

export default CharacterList;
