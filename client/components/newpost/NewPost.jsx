import { useField } from '../../hooks/useField';
import { useFile } from '../../hooks/useFile';
import './NewPost.css';

export default function NewPost() {
	const { image, onChange } = useFile();
	const title = useField({ type: 'text', field: '' });
	const content = useField({ type: 'text', field: '' });
	const author = useField({ type: 'text', field: '' });

	const API_URL = 'http://127.0.0.1:8000/';

	const handleSubmit = async (e) => {
		e.preventDefault();

		const jsonString = JSON.stringify({
			image_url: image,
			title: title.value,
			content: content.value,
			author: author.value,
		});

		const requestOptions = {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
			body: jsonString,
		};

		fetch(API_URL + 'post', requestOptions)
			.then((result) => {
				if (result.ok) {
					return result.json();
				}
				throw result;
			})
			.then((data) => {
				window.location.reload();
				window.scrollTo(0, 0);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='new--post--form--container'>
			<h3>Comparte tu experiencia!</h3>
			<form className='new--post--form' onSubmit={handleSubmit}>
				<fieldset>
					<input type='file' onChange={onChange} />
				</fieldset>
				<fieldset>
					<input {...title} placeholder='title' required />
				</fieldset>
				<fieldset>
					<textarea {...content} placeholder='content' required />
				</fieldset>
				<fieldset>
					<input {...author} placeholder='author' required />
				</fieldset>
				<button>Crear post!</button>
			</form>
		</div>
	);
}
