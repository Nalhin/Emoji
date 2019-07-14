import emojiData from "../emoji.json";
export const group = [...new Set(emojiData.map(emoji => emoji.group))];

// group.map(group => {
//     emojiData.map(emoji => {
//         return emoji.group === emoji
//     })
// })

// const refs = group.reduce((acc, group) => {
//     acc[group] = createRef();
//     return acc;
// }, []);

export const emojiArray = group.map(group => {
    let i = 0;
    return emojiData.reduce((rows, emoji) => {
        if (group === emoji.group) {
            rows[i] = emoji;
            i++;
        }
        return rows;
    }, []);
});
