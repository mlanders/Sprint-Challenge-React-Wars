import React from 'react';

function Film(props) {
	return (
		<div>
			<h3>Films</h3>
			{props.films.length > 0
				? props.films.map((item, index) => {
						return (
							<li key={index} className='listItem'>
								{item}
							</li>
						);
				  })
				: ''}
		</div>
	);
}

export default Film;
