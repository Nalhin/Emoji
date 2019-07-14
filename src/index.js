import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './reset.scss';
import App from './Component/App';
import { Provider } from 'react-redux';
import store from './Module/store/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


