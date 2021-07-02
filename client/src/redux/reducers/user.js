import { GET_USER } from '../constants';

const initialState = {
    data: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};