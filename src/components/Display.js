import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
	const { number } = useContext(NumberContext);

	return (
		<DisplayStyles>
			<div className={`screen ${number > 999999 ? 'large-num' : ''}`}>{number}</div>
		</DisplayStyles>
	);
};

export default Display;
