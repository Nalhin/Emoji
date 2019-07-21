import React from 'react';
import './RecentlyUsed.scss';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RecentlyUsed = ({ recentlyUsed, deleteRecentlyUsedEmoji ,getRecently, setCopyEmoji}) => {

    React.useEffect(() => {
        const localEmoji = localStorage.getItem('emoji');
        const localEmojiArray = localEmoji ? JSON.parse(localEmoji) : [];
        getRecently(localEmojiArray);
    }, [getRecently]);
   
    const copyFunc = (emoji, result) => {
        if (result) {
          setCopyEmoji(emoji)
        }
      }


    return (
        <div className="recently-used">
            <h1 className="recently-used__title">Recently Used Emoji</h1>
            <div className="recently-used__emoji-container">
                {recentlyUsed.map(emoji => (
                    <CopyToClipboard text={emoji} key={emoji} onCopy={copyFunc} className="recently-used__emoji">
                        <span key={emoji}>{emoji}</span>
                    </CopyToClipboard>
                ))}
            </div>
            <button onClick={deleteRecentlyUsedEmoji} className="recently-used__button">Clear</button>
        </div>
    );
};

RecentlyUsed.propTypes = {
    recentlyUsed: PropTypes.arrayOf(PropTypes.string),
    deleteRecentlyUsedEmoji: PropTypes.func.isRequired,
    getRecently:PropTypes.func.isRequired,
    setCopyEmoji:PropTypes.func.isRequired
};

RecentlyUsed.defaultProps = {
    recentlyUsed: [],
};

export default RecentlyUsed;
