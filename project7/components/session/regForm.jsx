

import React from 'react';
import {
  TextField,Button
} from '@material-ui/core';
import axios from 'axios';


class LoginRegister extends React.Component{
  constructor(props){
    super(props)
    this.state={
      loginName:'',
      password:'',
      first_name:'',
      last_name:'',
      location:'',
      description:'',
      occupation:'',
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    //verify password and verifyPassword are same else

    this.setState({

    })
  }

  

  render(){
    return (
  <div >
  <form >
      <div>
      <input type="text" name='userName' placeholder="A B" />UserName
      <input type="text" name='password' placeholder="weak" />Password
      <input type="text" name='passwordAgain' placeholder="weak" />Password Again
      <input type="text" name='firstName' placeholder="A" />first name
      <input type="text" name='lastName' placeholder="B" />last name
      <input type="text" name='location' placeholder="farm" />location
      <input type="text" name='description' placeholder="grow stuff" />description
      <input type="text" name='occupation' placeholder="farmer" />occupation
      </div>
   <button type="submit" value="Submit" onClick={this.handleUploadButtonClicked}>Submit</button>
  </form>
  </div>
      );
  } //end render


}


