import React, { useState } from 'react'
import { CreateShipment } from './components/CreateShipment';
import { RateGrid } from './components/RateGrid';

export const SkydropxApp = () => {

	const [rates, setRates] = useState([]);

	return (
		<>
			<h2>SkydropxApp</h2>
			<hr />
			<CreateShipment setRates={setRates} />
			<RateGrid rates={rates} />
			
		</>
	)
}
