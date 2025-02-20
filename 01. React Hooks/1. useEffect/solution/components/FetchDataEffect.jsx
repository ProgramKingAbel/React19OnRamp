import { useState, useEffect } from "react";

const FetchDataEffect = () => {

	const [posts, setPosts] = useState([]);

	useEffect( () => {
		async function getData () {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
				method: 'GET',
				headers: { 'Accept': 'application/json' }})
				.then(response => response.json())
				.then(data => setPosts(data))
				.catch(error => console.error("Error", error));
		}

		getData();
	}
	, []);

	return (
		<div>
		{posts && posts.length ?
			<div>
			<h1>Title: {posts[0].title}</h1> 
			<p>{posts[0].body}</p>
			</div> : <p> No posts yet</p> }
		</div>
	);
}

export default FetchDataEffect;
