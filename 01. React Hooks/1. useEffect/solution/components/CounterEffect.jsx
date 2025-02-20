import { useEffect, useState } from 'react';

const CounterEffect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Count: ${count}`;
	}, [count]);
	return (
		<div>
		<h1>{count}</h1>
		<button onClick={() => setCount((count) => count += 1)}>Increment Count</button>
		</div>
	)
}

export default CounterEffect;
