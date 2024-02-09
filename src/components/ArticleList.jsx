import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleFetch } from '../store/actions/articlesActions';
import '../styles/article.css';
import CreateArticleModal from './CreateArticleModal';

const ArticleList = () => {
	const articles = useSelector(state => state.articles.list);
	const pinArticle = useSelector(state => state.articles.pinArticle);
	const dispatch = useDispatch();
	const [articleList, setArticleList] = useState([]);
	const [modal, setModal] = useState(false);
	const [originalArticleList, setOriginalArticleList] = useState([]);

	const onSearchArticles = e => {
		const searchQuery = e.target.value.toLowerCase();

		if (searchQuery.trim() === '') {
			setArticleList(originalArticleList);
			return;
		}

		const filteredArticles = originalArticleList.filter(article => {
			return (
				article.title?.toLowerCase().includes(searchQuery) ||
				article.description?.toLowerCase().includes(searchQuery)
			);
		});

		setArticleList(filteredArticles);
	};

	useEffect(() => {
		// const fetchInitialArticle = async () => {
		// 	try {
		// 		const { data } = await axios.get(`${initialUrl}&pageSize=5`);
		// 		setOriginalArticleList(data.articles);
		// 		setArticleList(data.articles);
		// 	} catch (error) {
		// 		console.error('Error message: ', error);
		// 	}
		// };
		// fetchInitialArticle();
		if (!articles?.length) {
			dispatch(articleFetch(5));
		}
	}, [articles?.length, dispatch]);

	console.log(articles);

	return (
		<>
			<h1>Please, search or create new articles.</h1>
			{modal && (
				<CreateArticleModal
					setArticleList={setArticleList}
					onClose={() => setModal(false)}
				/>
			)}
			<div className='user-actions'>
				<button onClick={() => setModal(!modal)}>Create New Article</button>
				<label>Search</label>
				<input type='text' id='search-input' onChange={onSearchArticles} />
			</div>

			{pinArticle && (
				<ArticleList
					article={pinArticle}
					key={pinArticle.id}
					url={pinArticle.urlToImage}
					alt={pinArticle.description}
					title={pinArticle.title}
					description={pinArticle.description}
					author={pinArticle.author}
					isUserCreate={pinArticle.isUserCreate}
					setArticleList={setArticleList}
					id={pinArticle.id}
				/>
			)}

			{articles?.length && (
				<div className='article-container'>
					{articles
						.filter(el => !el?.id || el.id !== pinArticle?.id)
						.map((el, index) => {
							return (
								<ArticleList
									article={el}
									key={index}
									url={el.urlToImage}
									alt={el.description}
									title={el.title}
									description={el.description}
									author={el.author}
									isUserCreate={el.isUserCreate}
									setArticleList={setArticleList}
									id={el.id}
								/>
							);
						})}
				</div>
			)}
		</>
	);
};

export default ArticleList;
