import styled from 'styled-components';

export const CalculatorStyles = styled.div`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	background-color: #000;
	width: 100%;
	height: 100vh;
	display: grid;
	justify-items: center;
	border-radius: 25px;
	position: relative;
	grid-template-areas:
		'display'
		'numbers';
	button {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		font-size: 2rem;
		color: white;
		font-family: 'helvetica', sans-serif;
		background: #aaa;
		&:focus {
			outline: none;
		}
	}

	.display {
		font-family: 'helvetica', sans-serif;
		font-size: 5rem;
		font-weight: 100;
		position: absolute;
		bottom: -30px;
		right: 0px;
		width: 100%;
		grid-area: display;
	}
	.number-pad {
		grid-area: numbers;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(4, 1fr);
		padding: 30px 5px 30px 5px;
		width: 100%;
		max-height: 500px;
		.button-div:focus {
			outline: none;
		}
	}
	.zero-button {
		grid-column: 1/3;
		border-radius: 50px !important;
	}
`;

export const DisplayStyles = styled.div`
	margin: 10px;
	width: 90%;
	align-items: center;
	.screen,
	p {
		text-align: center;
		color: white;
	}
	.screen {
		margin: 0;
		text-align: right;
	}
`;
