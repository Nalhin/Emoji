import React from 'react';
import './RecentlyUsed.scss';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { deleteRecentlyUsed } from '../../../Module/actions/recentlyUsed'

const RecentlyUsed = ({ recentlyUsed, deleteRecentlyUsedEmoji }) => {

  return (
    <div className="recently-used">
      <h1>Recently Used</h1>
      <div className="emoji-div">{recentlyUsed.map(emoji =>
        <CopyToClipboard text={emoji} key={emoji} className="recently-used__emoji">
          <span key={emoji}>{emoji}</span>
        </CopyToClipboard>
      )}</div>
      <button onClick={deleteRecentlyUsedEmoji}>Clear</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { recentlyUsed: [...new Set(state.recentlyUsed)] };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteRecentlyUsedEmoji: () => {
      localStorage.removeItem('emoji');
      dispatch(deleteRecentlyUsed())
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(RecentlyUsed);


