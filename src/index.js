import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './App.js';
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<LoginForm/>, document.getElementById('root'));

serviceWorker.unregister();
