import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	generateArticleFetch,
	initialGenerateArticleFetch,
} from '../store/actions/articlesActions';
import '../styles/articleGenerate.css';
import ArticleItem from './ArticleItem';

const ArticleGenerate = () => {
	const articlesGenerate = useSelector(state => state.articles.listGenerate);
	const dispatch = useDispatch();

	const fetchMoreArticles = async () => {
		const initialPageSize = 10;
		const pageNumber = Math.ceil(articlesGenerate.length / initialPageSize) + 1;
		dispatch(generateArticleFetch(initialPageSize, pageNumber));
	};

	useEffect(() => {
		if (!articlesGenerate?.length) {
			dispatch(initialGenerateArticleFetch());
		}
	}, [articlesGenerate?.length, dispatch]);

	return (
		<>
			<h1> Please, сlick the button to generate 10 more articles </h1>

			<div className='button-actions'>
				<button onClick={fetchMoreArticles}>Generate 10 more articles</button>
			</div>

			<div className='article-container'>
				{articlesGenerate.map((el, index) => (
					<ArticleItem article={el} key={index} />
				))}
			</div>
		</>
	);
};

export default ArticleGenerate;
