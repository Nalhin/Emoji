import emojiData from './emoji.json';
import { group } from './groupList';

export const emojiArray = group.map(group => {
    let i = 0;
    return emojiData.reduce((rows, emoji) => {
        if (group === emoji.group) {
            rows[i] = { emoji: emoji.emoji, name: emoji.name, skin: emoji.skin };
            i++;
        }
        return rows;
    }, []);
});
