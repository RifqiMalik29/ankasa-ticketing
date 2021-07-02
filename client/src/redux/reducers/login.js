import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants';

const initialState = {
    token: '',
    isLogin: false,
    loading: false,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                loading: false,
                isLogin: true,
                error: '',
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false,
                isLogin: false,
            }
        case LOGOUT:
            return {
                ...state,
                token: '',
                isLogin: false,
                loading: false,
                error: '',
                persist: {
                    rehydrated: true,
                    version: -1,
                }
            };
        default:
            return state;
    }
};