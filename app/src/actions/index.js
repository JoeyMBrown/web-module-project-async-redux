import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';



//The fetchfox function returns another function that accepts dispatch as a param.
export const fetchFox = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios.get('https://randomfox.ca/floof/')
        .then((res) => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data.image })
        })
        .catch((err) => {
            dispatch({ type: FETCH_ERROR, payload: err.response})
        })
}