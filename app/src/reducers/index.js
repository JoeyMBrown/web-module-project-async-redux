import { FETCH_SUCCESS, FETCH_ERROR, FETCH_START } from './../actions';

const initialState = {
    image: '',
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: '',
                image: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}