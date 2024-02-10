import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleFetch } from '../store/actions/articlesActions';
import '../styles/article.css';
import ArticleItem from './ArticleItem';
import CreateArticleModal from './CreateArticleModal';

const ArticleList = () => {
	const articles = useSelector(state => state.articles.list);
	const pinArticle = useSelector(state => state.articles.pinArticle);
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);
	const [query, setQuery] = useState('');

	const onSearchArticles = useMemo(() => {
		return articles?.filter(article => {
			return (
				article.title?.toLowerCase().includes(query.toLowerCase()) ||
				article.description?.toLowerCase().includes(query.toLowerCase())
			);
		});
	}, [query, articles]);

	useEffect(() => {
		if (!articles?.length) {
			dispatch(articleFetch());
		}
	}, [articles?.length, dispatch]);

	return (
		<>
			<h1>Please, search or create new articles.</h1>
			{modal && <CreateArticleModal onClose={() => setModal(false)} />}
			<div className='user-actions'>
				<button onClick={() => setModal(!modal)}>Create New Article</button>
				<label>Search</label>
				<input
					type='text'
					id='search-input'
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
			</div>

			{pinArticle && (
				<div className='pin-article-container'>
					<ArticleItem article={pinArticle} />
				</div>
			)}

			{onSearchArticles?.length && (
				<div className='article-container'>
					{onSearchArticles
						.filter(el => !el?.id || el.id !== pinArticle?.id)
						.map((el, index) => {
							return <ArticleItem article={el} key={index} />;
						})}
				</div>
			)}
		</>
	);
};

export default ArticleList;
