import React from 'react';

export const withFilteredEmoji = Component => props => {
 //to be fixed
    return (
        <Component
            name={props.name}
            addRecentlyUsedEmoji={props.addRecentlyUsedEmoji}
            setCopyEmoji={props.setCopyEmoji}

            emoji={props.skinChange ? props.emoji.slice(0, 2) + props.skin.unicode + props.emoji.slice(2) : props.emoji}
        />
    );
};
