import { combineReducers } from 'redux';
import skin from './skinColorReducer';
import search from './searchReducer';
import recentlyUsed from './recentlyUsedReducer';
import copy from './copyReducer';

export default combineReducers({
    skin: skin,
    search: search,
    recentlyUsed: recentlyUsed,
    copy: copy,
});
