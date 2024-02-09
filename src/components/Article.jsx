import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/article.css';
import ArticleList from './ArticleList';
import CreateArticleModal from './CreateArticleModal';

const initialUrl =
	'https://newsapi.org/v2/everything?q=tesla&from=2024-01-09&sortBy=publishedAt&apiKey=50c0364d149b4abe89fd0e0f62bea602';

const Article = () => {
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
		const fetchInitialArticle = async () => {
			try {
				const { data } = await axios.get(`${initialUrl}&pageSize=5`);
				setOriginalArticleList(data.articles);
				setArticleList(data.articles);
			} catch (error) {
				console.error('Error message: ', error);
			}
		};
		fetchInitialArticle();
	}, []);

	console.log(articleList);

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

			<div className='article-container'>
				{articleList.map((el, index) => (
					<ArticleList
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
				))}
			</div>
		</>
	);
};

export default Article;
