import './PostCard.css';

export default function PostCard({ post }) {
	const IMG_PREFIX = 'http://127.0.0.1:8000/';
	return (
		<section className='section--post--card'>
			<h2>{post.title}</h2>
			<h2>{post.content}</h2>
			<img src={IMG_PREFIX + post.image_url} className='post--card--img'/>
			<h2>{post.author}</h2>
		</section>
	);
}
