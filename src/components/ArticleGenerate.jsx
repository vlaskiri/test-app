import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/articleGenerate.css';
import ArticleItem from './ArticleItem';

const initialUrl =
	'https://newsapi.org/v2/everything?q=tesla&from=2024-01-09&sortBy=publishedAt&apiKey=50c0364d149b4abe89fd0e0f62bea602';

const ArticleGenerate = () => {
	const [articleGenerateList, setArticleGenerateList] = useState([]);

	const fetchMoreArticles = async () => {
		try {
			const initialPageSize = 10;
			const pageNumber =
				Math.ceil(articleGenerateList.length / initialPageSize) + 1;
			const url = `${initialUrl}&pageSize=${initialPageSize}&page=${pageNumber}`;
			const { data } = await axios.get(url);
			setArticleGenerateList(prevArticles => [
				...prevArticles,
				...data.articles,
			]);
		} catch (error) {
			console.error('Error message: ', error);
		}
	};

	useEffect(() => {
		const fetchInitialArticle = async () => {
			try {
				const { data } = await axios.get(`${initialUrl}&pageSize=10`);
				setArticleGenerateList(data.articles);
			} catch (error) {
				console.error('Error message: ', error);
			}
		};
		fetchInitialArticle();
	}, []);

	return (
		<>
			<h1> Please, сlick the button to generate 10 more articles </h1>

			<div className='button-actions'>
				<button onClick={fetchMoreArticles}>Generate 10 more articles</button>
			</div>

			<div className='article-container'>
				{articleGenerateList.map((el, index) => (
					<ArticleItem
						key={index}
						url={el.urlToImage}
						alt={el.description}
						title={el.title}
						description={el.description}
						author={el.author}
					/>
				))}
			</div>
		</>
	);
};

export default ArticleGenerate;
