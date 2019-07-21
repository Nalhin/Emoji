import React from 'react';
import PropTypes from 'prop-types';
import './Group.scss';
import Emoji from './Emoji/EmojiContainer';

const Group = ({ group, search, row }) => {
  return (
    <div className="emoji-group">
      <h1 className="emoji-group__title">{group}</h1>
      <div className="emoji-group__emoji">
        {row.map((emoji, index) =>
          emoji.name.includes(search) ? (
            <Emoji
              emoji={emoji.emoji}
              skinChange={emoji.skin}
              name={emoji.name}
              key={index}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

Group.propTypes = {
  group: PropTypes.string.isRequired,
  search: PropTypes.string,
  row: PropTypes.arrayOf(PropTypes.shape({
    emoji: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }.isRequired)).isRequired
}

export default Group;
