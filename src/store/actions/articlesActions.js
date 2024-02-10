import axios from 'axios';

export const ACTION_SET_ARTICLES = 'ACTION_SET_ARTICLES';
export const ACTION_ADD_ARTICLES = 'ACTION_ADD_ARTICLES';
export const ACTION_SET_PIN_ARTICLES = 'ACTION_SET_PIN_ARTICLES';
export const ACTION_DELETE_PIN_ARTICLES = 'ACTION_DELETE_PIN_ARTICLES';
export const ACTION_SET_ARTICLES_GENERATE = 'ACTION_SET_ARTICLES_GENERATE';
export const ACTION_MORE_ARTICLES_GENERATE = 'ACTION_MORE_ARTICLES_GENERATE';

const initialUrl =
	'https://newsapi.org/v2/everything?q=tesla&from=2024-01-10&sortBy=publishedAt&apiKey=50c0364d149b4abe89fd0e0f62bea602';

export function articleFetch() {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${initialUrl}&pageSize=5`);
			dispatch(setArticlesList(data.articles));
		} catch (error) {
			console.error('Error message: ', error.message);
		}
	};
}

export function initialGenerateArticleFetch() {
	return async dispatch => {
		try {
			const { data } = await axios.get(`${initialUrl}&pageSize=10`);
			dispatch(setArticleGenerateList(data.articles));
		} catch (error) {
			console.error('Error message: ', error.message);
		}
	};
}

export function generateArticleFetch(initialPageSize, pageNumber) {
	return async dispatch => {
		try {
			const url = `${initialUrl}&pageSize=${initialPageSize}&page=${pageNumber}`;
			const { data } = await axios.get(url);
			console.log(data);
			dispatch(addMoreGenerateArticles(data.articles));
		} catch (error) {
			console.error('Error message: ', error.message);
		}
	};
}

export function setArticlesList(data) {
	return {
		type: ACTION_SET_ARTICLES,
		payload: data,
	};
}

function setArticleGenerateList(data) {
	return {
		type: ACTION_SET_ARTICLES_GENERATE,
		payload: data,
	};
}

export function addArticles(data) {
	return {
		type: ACTION_ADD_ARTICLES,
		payload: data,
	};
}

export function addMoreGenerateArticles(data) {
	return {
		type: ACTION_MORE_ARTICLES_GENERATE,
		payload: data,
	};
}

export function setPinArticle(data) {
	return {
		type: ACTION_SET_PIN_ARTICLES,
		payload: data,
	};
}

export function deletePinArticle() {
	return {
		type: ACTION_DELETE_PIN_ARTICLES,
	};
}
