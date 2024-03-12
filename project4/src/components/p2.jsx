import React from 'react';
import ReactDOM from 'react-dom';

import States from './states/States';
import Header from './header/Header';

ReactDOM.render(
  <div>
    <Header />,
    <States />
  </div>,
  document.getElementById('reactapp'),
);
