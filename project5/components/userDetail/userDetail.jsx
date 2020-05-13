import React from 'react';
//import ReactDOM from 'react-dom';
import {
  Typography,Link,Button
} from '@material-ui/core';
//import Link from 'react-router-dom'
import './userDetail.css';

import { forOfStatement, thisTypeAnnotation } from '@babel/types';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      usrdet: '',
      usrid:''
    }    
    console.log("UserDetail ctor")
  }

  componentDidUpdate(){
    console.log("UserDetail componentDidUpdate")
    if (this.state.usrid !== this.props.match.params.userId){
      this.setState({
        usrdet:window.cs142models.userModel(this.props.match.params.userId),
        usrid:this.props.match.params.userId
      })
    }
  }
 
  appendMe=()=>{
    console.log("appendMe:",window.cs142models.userModel(this.props.match.params.userId).first_name,window.cs142models.userModel(this.props.match.params.userId).last_name)
    return (
      <div>
        {window.cs142models.userModel(this.props.match.params.userId).first_name+" "+window.cs142models.userModel(this.props.match.params.userId).last_name }
      </div>
    )
  }



  render() {
    return (
      <div id="ud">
      <Typography variant="body1">
      <Link href='http://localhost:3000/photo-share.html#/photos/57231f1a30e4351f4e9f4bda'>photos</Link>
      <Button href="http://localhost:3000/photo-share.html#/photos/57231f1a30e4351f4e9f4bda" color="primary">
        Link
      </Button>
        This should be the UserDetail view of the PhotoShare app. Since
        it is invoked from React Router the params from the route will be
        in property match. So this should show details of user:
        this.props.match.params.userId}. You can fetch the model for the
        user from window.cs142models.userModel(userId).
      </Typography>
      {this.appendMe()}
      
      </div>
    );
  }
}

export default UserDetail;
