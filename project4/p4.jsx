import React from 'react';
import ReactDOM from 'react-dom';

//import DynamicView from './components/dynamic/DynamicView';
//import './DynamicView.css';
import Example from './components/example/Example';
import States from './components/states/States';

class DynamicView extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
       isToggleOn: true,
       num:0 
      };
      this.num_click = 0;
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState((state, num_click) => ({
        isToggleOn: !state.isToggleOn
      }));
      this.state.num++;
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
          <div id="nc">{this.state.num}</div>
          <div id='stuff'>{this.state.isToggleOn ? <Example /> : <States />}</div>
        </div>
      );
    }
  }


ReactDOM.render(
  <DynamicView />,
  document.getElementById('reactapp'),
);
