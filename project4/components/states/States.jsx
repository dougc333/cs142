import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text_data: "" };
    this.arr = window.cs142models.statesModel();
    //console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    console.log(this.arr);
  }
  
  handleChange = e => {
    this.setState({ text_data: e.target.value });
    this.arr;
  };

  render() {
    return (
      <div>
        Replace this with the code for CS142 Project #4, Problem #2
        <input
          type="text"
          value={this.state.text_data}
          onChange={this.handleChange}
        />
        <p className="echo">Echo:{this.state.text_data}</p>
        {this.arr}
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    );
  }
}

export default States;
