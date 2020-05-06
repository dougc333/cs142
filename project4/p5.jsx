import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
//import DynamicView from './components/dynamic/DynamicView';
//import './DynamicView.css';



ReactDOM.render(
  <div>
    <Header />
    <DynamicView />
  </div>,
  document.getElementById('reactapp'),
);
