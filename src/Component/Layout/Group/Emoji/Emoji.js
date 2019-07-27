import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './Emoji.scss';
import { withFilteredEmoji } from '../../../hoc/withFilteredEmoji';

const Emoji = ({ emoji, name, addRecentlyUsedEmoji, setCopyEmoji }) => {
    const handleClick = React.useCallback(() => {
        const localEmoji = localStorage.getItem('emoji');
        const localEmojiArray = localEmoji ? JSON.parse(localEmoji) : [];
        localStorage.setItem('emoji', JSON.stringify([emoji, ...localEmojiArray]));
        addRecentlyUsedEmoji(emoji);
    }, [emoji, addRecentlyUsedEmoji]);

    const copyFunc = (emoji, result) => {
        if (result) {
            setCopyEmoji(emoji);
        }
    };

    return (
        <div className="emoji" onClick={handleClick}>
            <CopyToClipboard text={emoji} onCopy={copyFunc}>
                <span className="emoji__icon">{emoji}</span>
            </CopyToClipboard>
            <span className="emoji__text">{name}</span>
        </div>
    );
};

Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    addRecentlyUsedEmoji: PropTypes.func.isRequired,
    setCopyEmoji: PropTypes.func.isRequired,
};

export default withFilteredEmoji(Emoji);
