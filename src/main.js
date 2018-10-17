import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import '../style/main.scss';

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App />, rootNode);
