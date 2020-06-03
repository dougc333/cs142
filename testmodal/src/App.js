import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal.js'
import PopUp from './popup'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:false
    }
  }

  handleClick=(e)=>{
    console.log("handleClick e:",e)
    console.log("handleClick this.state:",this.state)
    this.setState({show:!this.state.show})
  }


  render(){
    
    return(
    <div className="app"> 
      hello
      <button className="button-style" onClick={this.handleClick}>Me</button>
      <input type="file" accept="image/*" ref={(domFileRef) => { this.uploadInput = domFileRef; }} name="AddPhoto" />
      {this.state.show ? <PopUp toggle={this.togglePop} /> : null}
    </div>
    );
  }
}

export default App;
