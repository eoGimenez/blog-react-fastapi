import './PostCard.css';

export default function PostCard({ post }) {
	const API_URL = 'http://127.0.0.1:8000/';

	const handleDelete = (e) => {
		e.preventDefault();

		const requestOption = {
			method: 'DELETE',
		};

		fetch(`${API_URL}post/${post.id}`, requestOption)
			.then((response) => {
				if (response.ok) {
					window.location.reload();
				}
				throw response;
			})
			.catch((err) => console.log(err));
	};

	return (
		<section className='section--post--card'>
			<div className='post--card--container'>
				<div className='post--card--img--container'>
					<img src={API_URL + post.image_url} className='post--card--img' />
				</div>
				<div className='post--card--content--container'>
					<h2 className='post--card--title'>{post.title}</h2>
					<p className='post--card--content'>{post.content}</p>
					<h3 className='post--card--author'> by: {post.author}</h3>
				</div>
				<button className='post--card--buttom' onClick={handleDelete}>
					Delete post
				</button>
			</div>
		</section>
	);
}
