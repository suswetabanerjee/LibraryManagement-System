import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux';
import postReducer from './reducers/postReducer';
import {Provider} from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

const store = createStore(postReducer);
ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    
 document.getElementById('root'));
