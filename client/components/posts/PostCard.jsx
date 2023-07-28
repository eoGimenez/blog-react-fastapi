import './PostCard.css';

export default function PostCard({ post }) {
	return (
		<section className='section--post--card'>
			<h2>{post.title}</h2>
			<h2>{post.content}</h2>
			<h2>{post.image_url}</h2>
			<h2>{post.author}</h2>
		</section>
	);
}
