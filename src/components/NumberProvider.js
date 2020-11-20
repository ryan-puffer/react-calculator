import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
	//initialize state across entire app
	const [number, setNumber] = useState('0');
	const [functionValue, setFunctionValue] = useState('');
	const [storedNumber, setStoredNumber] = useState('');

	//no more than one decimal or not only a decimal
	const handleSetDisplayValue = (num) => {
		if (!number.includes('.') || num !== '.') {
			//limits length of number on screen
			if (number < 9999999999) {
				//concat digit pressed onto number, replace initial 0 w/ empty string
				setNumber(`${(number + num).replace(/^0+/, '')}`);
			}
		}
	};

	const setStoredValue = () => {
		setStoredNumber(number);
	};

	const handlePercentButton = () => {
		setNumber(number / 100);
	};

	const handleClearValue = () => {
		setNumber('0');
		setStoredNumber('');
		setFunctionValue('');
	};

	const handleFunctionButton = (buttonValue) => {
		//when operation is clicked, set stored number from display
		setStoredValue();
		setFunctionValue(buttonValue);
		setNumber('');
	};

	const handleEqualButton = () => {
		if (functionValue === '+') {
			setNumber(`${parseFloat(number) + parseFloat(storedNumber)}`);
		} else if (functionValue === '−') {
			setNumber(`${parseFloat(storedNumber) - parseFloat(number)}`);
		} else if (functionValue === '×') {
			setNumber(`${parseFloat(storedNumber) * parseFloat(number)}`);
		} else if (functionValue === '÷') {
			setNumber(`${parseFloat(storedNumber) / parseFloat(number)}`);
		}
		setStoredValue();
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
				storedNumber,
				handlePercentButton,
				functionValue,
				number,
			}}>
			{props.children}
		</NumberContext.Provider>
	);
};

export default NumberProvider;
