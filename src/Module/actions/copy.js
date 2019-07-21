import { SET_COPY, REMOVE_COPY } from './actionTypes';

export const setCopy = copy => ({
    type: SET_COPY,
    copy: copy,
});

export const removeCopy = () => ({
    type: REMOVE_COPY,
});
