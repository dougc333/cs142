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
      usrdet: window.cs142models.userModel(this.props.match.params.userId),
      usrid:''
    }    
    console.log("UserDetail ctor propsUserId:",this.props.match.params.userId)
    console.log("UserDetail ctor:",this.state.usrdet)
  }

  componentDidUpdate(){
    console.log("UserDetail componentDidUpdate props userId:",this.props.match.params.userId)
    if (this.state.usrid !== this.props.match.params.userId){
      this.setState({
        usrdet:window.cs142models.userModel(this.props.match.params.userId),
        usrid:this.props.match.params.userId
      })
    }
  }
 
  appendMe=()=>{
    console.log("this.props.match.params.userId:",this.props.match.params.userId)
    console.log("appendMe:",window.cs142models.userModel(this.props.match.params.userId).first_name,
                 window.cs142models.userModel(this.props.match.params.userId).last_name)
    return (
      <Typography component={'span'} color="primary">
        {window.cs142models.userModel(this.props.match.params.userId).first_name+" "+window.cs142models.userModel(this.props.match.params.userId).last_name }
      </Typography>
    
    )
  }
  appendLink(){
    console.log("UserDetail appendLink: propsUserId:",this.props.match.params.userId)
    return( 
      <Link className='photo-link' color="secondary" href={'http://localhost:3000/photo-share.html#/photos/'+this.props.match.params.userId}>Photos</Link>
    )
    
  }

  render() {
    return (
      <div id="ud">
      {this.appendMe()}
      <Typography variant="body1">
      {this.appendLink()}
      </Typography>
      </div>
    );
  }
}

export default UserDetail;
