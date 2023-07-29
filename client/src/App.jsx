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
		<div className='app'>
			<h1 className='app--web--title'>Esta Web es con fines educativos, por consecunencia no estara facoptirzada al 100%</h1>
			{posts && posts.map((post, i) => <PostCard key={i} post={post} />)}
		</div>
	);
}
