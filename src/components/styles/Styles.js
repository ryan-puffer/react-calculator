import styled from 'styled-components';

export const CalculatorStyles = styled.div`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	background-color: #000;
	width: 100%;
	max-width: 325px;
	margin: 0 auto;
	height: 625px;
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
		border: none;
		color: white;
		font-family: 'helvetica', sans-serif;
		background: #333;
		&:focus {
			outline: none;
		}
		&:active {
			background: #666;
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

	.function-button {
		background: #f1a33c;
		color: white;
		&:active {
			background: #ffd66f;
		}
	}

	.top-button {
		background: #a5a5a5;
		color: black;
		&:active {
			background: #bfbfbf;
		}
	}

	.top {
		display: flex;
		width: 100%;
		height: 30px;
		justify-content: space-between;
		color: white;
		padding: 5px 10px 0 10px;
		font-size: 1rem;
	}

	.bottom {
		height: 2px;
		width: 50%;
		border: 2px solid white;
		border-radius: 25px;
		position: absolute;
		bottom: 4px;
	}

	.menu {
		height: 15px;
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
	.large-num {
		font-size: 3rem;
	}
`;
