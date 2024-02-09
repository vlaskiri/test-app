import React from 'react';
import '../styles/articleList.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePinArticle } from '../store/actions/articlesActions';

const ArticleItem = ({
	url,
	alt,
	title,
	description,
	author,
	setArticleList,
	id,
	article
}) => {
	const pinArticle = useSelector((state) => state.articles.pinArticle);
  const dispatch = useDispatch();

	const onPinArticle = () => {
		if (pinArticle?.id === id) {
			dispatch(deletePinArticle);
		} else {
			dispatch(setArticleList(article));
		}
	};

	const onDeleteArticle = () => {
		setArticleList(prev => prev.filter(article => article.id !== id));
	};

	const pinButtonText = pinArticle?.id === id ? 'Unpin' : 'Pin';

	return (
		<div className='article-content'>
			<img src={url} alt={alt} />
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{author}</p>
			{id && (
				<div className='article-active'>
					<button onClick={onPinArticle}>{pinButtonText}</button>
					<button onClick={onDeleteArticle}>Delete</button>
				</div>
			)}
		</div>
	);
};

export default ArticleItem;
