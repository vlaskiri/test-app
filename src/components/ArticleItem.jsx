import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deletePinArticle,
	setArticlesList,
	setPinArticle,
} from '../store/actions/articlesActions';
import '../styles/articleList.css';

const ArticleItem = ({ article }) => {
	const pinArticle = useSelector(state => state.articles.pinArticle);
	const articles = useSelector(state => state.articles.list);
	const dispatch = useDispatch();

	const onPinArticle = () => {
		if (pinArticle?.id === article.id) {
			dispatch(deletePinArticle());
		} else {
			dispatch(setPinArticle(article));
		}
	};

	const onDeleteArticle = () => {
		dispatch(
			setArticlesList(articles.filter(articled => articled.id !== article.id))
		);
	};

	const pinText = pinArticle?.id === article.id ? 'Unpin' : 'Pin';

	return (
		<div className='article-content'>
			<img src={article.urlToImage} alt={article.description} />
			<h2>{article.title}</h2>
			<p>{article.description}</p>
			<p>{article.author}</p>
			{article.id && (
				<div className='article-active'>
					<button onClick={onPinArticle}>{pinText}</button>
					<button onClick={onDeleteArticle}>Delete</button>
				</div>
			)}
		</div>
	);
};

export default ArticleItem;
