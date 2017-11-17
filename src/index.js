import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import login from './reducers/Login';
const store = createStore (login);

export default store;

/*import axios from 'axios';
axios.post ('/log', {
    name: store.getState()
})
    .then ((res) => {})
    .catch ((err) => {});

import * as actions from './actions/Login';

store.dispatch(actions.login());
axios.post ('/log', {
    name: store.getState()
})
    .then ((res) => {})
    .catch ((err) => {});*/

import App from './App';

ReactDOM.render (
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));