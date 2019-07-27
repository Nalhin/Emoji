import { SET_SKIN } from '../actions/actionTypes';

const defaultState = {
    unicode: '',
    name: 'normal',
    color: '#FFC83D',
};

const skinColorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SKIN:
            return action.skin;
        default:
            return state;
    }
};

export default skinColorReducer;
