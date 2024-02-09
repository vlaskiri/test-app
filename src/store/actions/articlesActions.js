import axios from 'axios'

export const ACTION_SET_ARTICLES = 'ACTION_SET_ARTICLES';

export function articleFetch() {
return async (dispatch) => {
    try {
        const { data } = await axios.get('');
        // dispatch(setArticle(data));
    } catch (error) {
    
    }
    
}
}
