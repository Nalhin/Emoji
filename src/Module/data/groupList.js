import emojiData from './emoji.json';
export const group = [...new Set(emojiData.map(emoji => emoji.group))];
