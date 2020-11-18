import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const PercentButton = () => {
	const { handlePercentButton } = useContext(NumberContext);
	return <button onClick={() => handlePercentButton()}>%</button>;
};

export default PercentButton;
