import { SET_COPY, REMOVE_COPY } from '../actions/actionTypes';

const recentlyUsedReducer = (state = '', action) => {
  switch (action.type) {
    case SET_COPY:
      return action.copy;
    case REMOVE_COPY:
      return '';
    default:
      return state;
  }
};

export default recentlyUsedReducer;
