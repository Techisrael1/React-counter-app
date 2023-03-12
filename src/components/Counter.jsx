import React, { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increaseCounter = () => {
		setCounter((counter) => counter + 1);
	};

	const resetCounter = () => {
		setCounter((counter) => (counter = 0));
	};

	const decreaseCounter = () => {
		if (counter > 0) {
			setCounter((counter) => counter - 1);
		} else {
			return;
		}
	};

	return (
		<div className="counter">
			<div className="count">{counter}</div>
			<div className="button-container">
				<button onClick={decreaseCounter}>-</button>
				<button onClick={resetCounter}>reset</button>
				<button onClick={increaseCounter}>+</button>
			</div>
		</div>
	);
};

export default Counter;
