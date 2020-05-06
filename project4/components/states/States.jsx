import React from 'react';
import './States.css';
import { conditionalExpression } from '@babel/types';

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
    //this.arr;
    console.log("matching:",e.target.value);
    //for (let i=0;i<this.arr.length;i++){
      //console.log(this.arr[i]);
    //  if (this.arr[i].match(e.target.value)){
    //    console.log(this.arr[i]);
    //  }
    //}
    this.event = e.target.value;
    //console.log("result:",this.arr.map(x=>x.match(e.target.value)));
    //this.get_sh(e.target.value); //would be better to match any string
  };

  get_states(){
    //let returnMe = []
    //? returnMe.push(true):returnMe.push(false)
    let res = this.arr.map(x=>x.toLowerCase().match(this.event) );
    let filterMe = this.arr.filter(x=>x.toLowerCase().match(this.event));
    console.log("res:",res.toString());
    console.log("filterMe:",filterMe);
    return filterMe;
  }

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
    <h4>The filter:</h4>
    {this.event}
    <h4>After filtering</h4>
      <ul>{this.get_states().map(x=><li key={x}>{x}</li>)}</ul>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    );
  }
}
//<h4>Before filtering</h4>
//    <div><ul>{this.arr.map(x=><li key={x}>{x}</li>)}</ul></div>
export default States;
