import { combineReducers } from 'redux';
import skin from './skinColorReducer';
import search from './searchReducer';

export default combineReducers({
    skin: skin,
    search: search
})
