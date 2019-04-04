import React from 'react';
import Character from './Character';

import '../App.css';

function CharacterList(props) {
	return (
		<div className='characterList'>
			{props.characterList.map((char, index) => {
				return <Character key={index} char={char} />;
			})}
		</div>
	);
}

export default CharacterList;
