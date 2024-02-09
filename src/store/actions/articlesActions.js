import axios from 'axios';

export const ACTION_SET_ARTICLES = 'ACTION_SET_ARTICLES';
export const ACTION_ADD_ARTICLES = 'ACTION_ADD_ARTICLES';
export const ACTION_SET_PIN_ARTICLES = 'ACTION_SET_PIN_ARTICLES';
export const ACTION_DELETE_PIN_ARTICLES = 'ACTION_SET_PIN_ARTICLES';

export function articleFetch() {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				'https://newsapi.org/v2/everything?q=tesla&from=2024-01-09&sortBy=publishedAt&apiKey=50c0364d149b4abe89fd0e0f62bea602&pageSize=5'
			);
			dispatch(setArticlesList(data.articles));
		} catch (error) {
			console.log(error.message);
		}
	};
}

function setArticlesList(data) {
	return {
		type: ACTION_SET_ARTICLES,
		payload: data,
	};
}

export function addArticles(data) {
	return {
		type: ACTION_ADD_ARTICLES,
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
