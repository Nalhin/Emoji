import { GET_RECENTLY_USED, ADD_RECENTLY_USED, DELETE_RECENTLY_USED } from '../actions/actionTypes';

const recentlyUsedReducer = (state = [], action) => {
    switch (action.type) {
        case GET_RECENTLY_USED:
            return action.recentlyUsed;
        case ADD_RECENTLY_USED:
            return [action.recentlyUsed, ...state];
        case DELETE_RECENTLY_USED:
            return [];
        default:
            return state;
    }
};

export default recentlyUsedReducer;
