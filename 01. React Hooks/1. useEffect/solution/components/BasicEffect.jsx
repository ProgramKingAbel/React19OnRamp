import { useEffect } from "react";

const BasicEffect = () => {
	useEffect( () => {
		console.log("Log only when the component renders for the first time");
	}, []);
	return (

		<div>Basic useEffect Hook</div>
	);
}

export default BasicEffect;
