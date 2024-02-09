import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticles } from '../store/actions/articlesActions';
import '../styles/articleModal.css';

const CreateArticleModal = ({ setArticleList, onClose }) => {
	const id = useId();
	const [formCreateArticle, setFormCreateArticle] = useState({
		title: '',
		author: '',
		imageUrl: '',
		description: '',
		content: '',
		isUserCreate: true,
		id,
	});
	const dispatch = useDispatch();

	const sliceText = (text, maxLength) => {
		const words = text.split('');

		if (words.length > maxLength) {
			return words.slice(0, maxLength).join('') + '...';
		}
		return words;
	};

	const onFormSubmit = e => {
		e.preventDefault();

		const isFormValid =
			formCreateArticle.title.trim() !== '' &&
			formCreateArticle.author.trim() !== '' &&
			formCreateArticle.imageUrl.trim() !== '' &&
			formCreateArticle.description.trim() !== '' &&
			formCreateArticle.content.trim() !== '';

		if (!isFormValid) return;

		const slicedText = sliceText(formCreateArticle.description, 150);

		// setArticleList(prev => [
		// 	{
		// 		src: formCreateArticle.imageUrl,
		// 		alt: formCreateArticle.description,
		// 		title: formCreateArticle.title,
		// 		description: slicedText,
		// 		author: formCreateArticle.author,
		// 		isUserCreate: true,
		// 		id,
		// 	},
		// 	...prev,
		// ]);

		dispatch(
			addArticles({
				src: formCreateArticle.imageUrl,
				alt: formCreateArticle.description,
				title: formCreateArticle.title,
				description: slicedText,
				author: formCreateArticle.author,
				isUserCreate: true,
				id,
			})
		);

		onClose();
	};

	return (
		<div className='article-modal__container'>
			<button className='close-button' onClick={onClose}>
				Close Modal Create Article
			</button>
			<h2>Create Article</h2>
			<form onSubmit={onFormSubmit}>
				<div className='form-group'>
					<label>Title</label>
					<input
						type='text'
						value={formCreateArticle.title}
						onChange={e =>
							setFormCreateArticle({
								...formCreateArticle,
								title: e.target.value,
							})
						}
					/>
				</div>
				<div className='form-group'>
					<label>Author</label>
					<input
						type='text'
						value={formCreateArticle.author}
						onChange={e =>
							setFormCreateArticle({
								...formCreateArticle,
								author: e.target.value,
							})
						}
					/>
				</div>
				<div className='form-group'>
					<label>Url Image</label>
					<input
						type='text'
						value={formCreateArticle.imageUrl}
						onChange={e =>
							setFormCreateArticle({
								...formCreateArticle,
								imageUrl: e.target.value,
							})
						}
					/>
				</div>
				<div className='form-group'>
					<label>Brief Description</label>
					<textarea
						value={formCreateArticle.description}
						onChange={e =>
							setFormCreateArticle({
								...formCreateArticle,
								description: e.target.value,
							})
						}
					/>
				</div>
				<div className='form-group'>
					<label>Content</label>
					<textarea
						value={formCreateArticle.content}
						onChange={e =>
							setFormCreateArticle({
								...formCreateArticle,
								content: e.target.value,
							})
						}
					/>
				</div>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
};

export default CreateArticleModal;
