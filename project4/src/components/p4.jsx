import React from 'react';
import ReactDOM from 'react-dom';

import DynamicView from './dynamic/DynamicView';
import Header from './header/Header';
import './dynamic/DynamicView.css';



ReactDOM.render(
    <div>
      <Header />
      <DynamicView />
    </div>,
  document.getElementById('reactapp'),
);
