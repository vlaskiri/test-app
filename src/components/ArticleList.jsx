import React, { useState } from 'react';
import '../styles/articleList.css';

const ArticleList = ({
	url,
	alt,
	title,
	description,
	author,
	isUserCreate,
	setArticleList,
	id,
}) => {
	const [pinArticle, setPinArticle] = useState(null);

	const onPinArticle = () => {
		if (pinArticle === id) {
			setPinArticle(null);
		} else {
			setPinArticle(id);
		}
	};

	const onDeleteArticle = () => {
		setArticleList(prev => prev.filter(article => article.id !== id));
	};

	console.log(pinArticle);

	const isPinned = pinArticle === id;
	const pinButtonText = isPinned ? 'Unpin' : 'Pin';

	console.log(isPinned);
	console.log(isUserCreate);

	return (
		<div className='article-content'>
			<img src={url} alt={alt} />
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{author}</p>
			{isUserCreate && (
				<div className='article-active'>
					<button onClick={onPinArticle}>{pinButtonText}</button>
					<button onClick={onDeleteArticle}>Delete</button>
				</div>
			)}
		</div>
	);
};

export default ArticleList;
