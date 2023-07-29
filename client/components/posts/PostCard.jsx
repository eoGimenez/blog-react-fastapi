import './PostCard.css';

export default function PostCard({ post }) {
	const IMG_PREFIX = 'http://127.0.0.1:8000/';
	return (
		<section className='section--post--card'>
			<div className='post--card--container'>
				<div className='post--card--img--container'>
					<img src={IMG_PREFIX + post.image_url} className='post--card--img' />
				</div>
				<div className='post--card--content--container'>
					<h2 className='post--card--title'>{post.title}</h2>
					<p className='post--card--content'>{post.content}</p>
					<h3 className='post--card--author'> by: {post.author}</h3>
				</div>
				<button className='post--card--buttom' onClick={null} >
					Delete post
				</button>
			</div>
		</section>
	);
}
