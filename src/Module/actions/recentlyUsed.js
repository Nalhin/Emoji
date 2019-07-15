import { GET_RECENTLY_USED, ADD_RECENTLY_USED } from './actionTypes';

export const getRecentlyUsed = recentlyUsed => ({
  type: GET_RECENTLY_USED,
  recentlyUsed: recentlyUsed,
});

export const addRecentlyUsed = recentlyUsed => ({
  type: ADD_RECENTLY_USED,
  recentlyUsed: recentlyUsed,
})