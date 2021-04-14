import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Favicon from "react-favicon";

ReactDOM.render(
    <React.StrictMode>
        <Favicon url="favicon.ico"/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
