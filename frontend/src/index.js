import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { inicialState } from './reducer';


ReactDOM.render(
    <StateProvider inicialState={inicialState} reducer={reducer}>
        <App />
    </StateProvider>
, 
document.getElementById('root'));


