import React, { useEffect } from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import { getRecentlyUsed } from './../Module/actions/recentlyUsed';
import { connect } from 'react-redux';

const App = ({ getRecently }) => {

  useEffect(() => {
    const localEmoji = localStorage.getItem('emoji');
    const localEmojiArray = (localEmoji) ? JSON.parse(localEmoji) : [];
    getRecently(localEmojiArray)
  }, [getRecently])


  return (
    <div className="App">
      <Layout />
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    getRecently: localEmojiArray => {
      dispatch(getRecentlyUsed(localEmojiArray));
    },

  };
};

export default connect(null, mapDispatchToProps)(App);

