import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import New from './New'
console.log(ReactDOM)
console.log(React)

ReactDOM.render(<App />, document.getElementById('john'));
// ReactDOM.render(<New />, document.getElementById('johnny'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
