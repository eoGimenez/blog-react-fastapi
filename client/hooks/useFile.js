import { useState } from 'react';

export function useFile() {
	const [image, setImage] = useState(null);

	const IMG_URL = 'http://127.0.0.1:8000/post/image/';

	const onChange = (e) => {
		handleImage(e.target.files[0]);
	};

	function handleImage(file) {
		const uploadData = new FormData();
		uploadData.append('image', file);

		const requestOptions = {
			method: 'POST',
			body: uploadData,
		};

		fetch(IMG_URL, requestOptions)
			.then((result) => {
				if (result.ok) {
					return result.json();
				}
				throw result;
			})
			.then((data) => setImage(data.filename))
			.catch((err) => console.log(err));
	}
	return { image, onChange };
}
