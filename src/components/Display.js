import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
	const { number } = useContext(NumberContext);
	return (
		<DisplayStyles>
			<h2>{number}</h2>
		</DisplayStyles>
	);
};

export default Display;
