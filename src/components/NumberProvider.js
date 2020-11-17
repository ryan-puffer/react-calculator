import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
	const [number, setNumber] = useState('0');
	const [functionValue, setFunctionValue] = useState('');
	const [storedNumber, setStoredNumber] = useState('');

	const handleSetDisplayValue = (num) => {
		if (!number.includes('.') || num !== '.') {
			setNumber(`${(number + num).replace(/^0+/, '')}`);
		}
	};

	const setStoredValue = () => {
		setStoredNumber(number);
		setNumber('');
	};

	const handleClearValue = () => {
		setNumber('0');
	};

	const handleFunctionButton = (buttonValue) => {
		setStoredValue();
		setFunctionValue(buttonValue);
	};

	const handleEqualButton = () => {
		if (functionValue === '+') {
			setNumber(`${parseFloat(number) + parseFloat(storedNumber)}`);
		} else if (functionValue === '-') {
			setNumber(`${parseFloat(storedNumber) - parseFloat(number)}`);
		} else if (functionValue === 'X') {
			setNumber(`${parseFloat(storedNumber) * parseFloat(number)}`);
		} else if (functionValue === '/') {
			setNumber(`${parseFloat(storedNumber) / parseFloat(number)}`);
		}
	};

	const handleNegativeButton = () => {
		if (number) {
			setNumber(number * -1);
		}
	};

	return (
		<NumberContext.Provider
			value={{
				handleSetDisplayValue,
				handleClearValue,
				handleFunctionButton,
				handleEqualButton,
				handleNegativeButton,
				number,
			}}>
			{props.children}
		</NumberContext.Provider>
	);
};

export default NumberProvider;
