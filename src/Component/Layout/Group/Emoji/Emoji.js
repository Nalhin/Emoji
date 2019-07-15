import React, { useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Emoji.scss';
import { connect } from 'react-redux';
import { addRecentlyUsed } from '../../../../Module/actions/recentlyUsed';


const Emoji = ({ emoji, name, skinChange, skin, addRecentlyUsedEmoji }) => {

  const showEmoji = skinChange
    ? emoji.slice(0, 2) + skin.unicode + emoji.slice(2)
    : emoji;


  const handleClick = useCallback(
    () => {

      const localEmoji = localStorage.getItem('emoji');
      const localEmojiArray = (localEmoji) ? JSON.parse(localEmoji) : [];
      localStorage.setItem('emoji', JSON.stringify([showEmoji, ...localEmojiArray]));

      addRecentlyUsedEmoji(showEmoji);
    },
    [showEmoji, addRecentlyUsedEmoji],
  )

  return (
    <div className="emoji" onClick={handleClick}>
      <CopyToClipboard text={showEmoji}>
        <span>{showEmoji}</span>
      </CopyToClipboard>
      <span className="emoji-text">{name}</span>
    </div >
  );
};

const mapStateToProps = state => {
  return { skin: state.skin };
};

const mapDispatchToProps = dispatch => {
  return {
    addRecentlyUsedEmoji: recently => {

      dispatch(addRecentlyUsed(recently));
    },

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Emoji);
