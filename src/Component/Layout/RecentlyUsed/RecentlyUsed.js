import React from 'react';
import './RecentlyUsed.scss';
import { connect } from 'react-redux';

const RecentlyUsed = ({ recentlyUsed }) => {

  const distinctEmoji = [...new Set(recentlyUsed)]

  return (
    <div className="recently-used">
      <h1>Recently Used</h1>
      <div>{distinctEmoji}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { recentlyUsed: state.recentlyUsed };
};


export default connect(
  mapStateToProps,
)(RecentlyUsed);


