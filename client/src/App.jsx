import { useState, useEffect } from 'react';
import './App.css';
import PostCard from '../components/posts/PostCard';

export default function App() {
	const [posts, setPosts] = useState();

	const API_URL = 'http://127.0.0.1:8000';

	useEffect(() => {
		let isCancelled = false;
		fetch(`${API_URL}/post/`)
			.then((result) => result.json())
			.then((data) => {
				if (!isCancelled) {
					setPosts(data.reverse());
				}
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
		return () => {
			isCancelled = true;
		};
	}, []);

	return (
		<div>
			hola hola
			{posts && posts.map((post, i) => <PostCard key={i} post={post} />)}
		</div>
	);
}
