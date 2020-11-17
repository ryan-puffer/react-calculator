import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
	const { number, functionValue, storedNumber } = useContext(NumberContext);
	return (
		<DisplayStyles>
			<h2>{number}</h2>
			<p>
				{functionValue}
				{storedNumber}
			</p>
		</DisplayStyles>
	);
};

export default Display;
