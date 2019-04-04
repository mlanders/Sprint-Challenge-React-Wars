import React from 'react';

function Vehicle(props) {
	return (
		<div>
			<h3>Vehicles</h3>

			{props.vehicles.length > 0
				? props.vehicles.map((item, index) => {
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

export default Vehicle;
