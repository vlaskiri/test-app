import {
	ACTION_SET_ARTICLES,
	ACTION_ADD_ARTICLES,
	ACTION_SET_PIN_ARTICLES,
	ACTION_DELETE_PIN_ARTICLES,
} from '../actions/articlesActions';

const initialState = {
	list: [],
    pinArticle: null,
};

export default function articlesReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case ACTION_SET_ARTICLES: {
			return {
				...state,
				list: payload,
			};
		}
		case ACTION_ADD_ARTICLES: {
			return {
				...state,
				list: [payload, ...state.list],
			};
		}
		case ACTION_SET_PIN_ARTICLES: {
			return {
				...state,
				pinArticle: payload,
			};
		}
		case ACTION_DELETE_PIN_ARTICLES: {
			return {
				...state,
				pinArticle: null,
			};
		}
		default:
			return state;
	}
}
