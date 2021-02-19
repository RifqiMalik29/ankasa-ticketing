import { GET_TICKETS } from '../constants';

const initialState = {
    data: [],
}

export default (state = [], action) => {
    switch (action.type) {
        case GET_TICKETS:
            return action.payload;
        default:
            return state;
    }
};