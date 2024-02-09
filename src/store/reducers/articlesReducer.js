import {
    ACTION_SET_ARTICLES
} from '../actions/articlesActions'

const initialState = {
    articles: {}
}

export default function articlesReducer(state = initialState, {type, payload}) {
    switch (type) {
    case ACTION_SET_ARTICLES: {
        return {
            ...state,
            articles: payload
        }
    }
    default:
        return state
    }
    
}