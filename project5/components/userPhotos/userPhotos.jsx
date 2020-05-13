import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import { cloneNode } from '@babel/types';


/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.photo={
     _id:'',
     first_name:'',
     last_name:'',
     location:'',
     description:'',
     occupation:''
    }
    console.log("UserPhotos ctor")
    this.state={
      photos: window.cs142models.photoOfUserModel(this.props.match.params.userId),
      userId:this.props.match.params.userId
    }
  }

  componentDidMount(){
    console.log("UserPhotos componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  addPhotos(){
    
  }

  render() {
    return (
      <Typography variant="body1">
      This should be the UserPhotos view of the PhotoShare app. Since
      it is invoked from React Router the params from the route will be
      in property match. So this should show details of user:
      {this.props.match.params.userId}. You can fetch the model for the user from
      window.cs142models.photoOfUserModel(userId):
        <Typography variant="caption">
          {JSON.stringify(window.cs142models.photoOfUserModel(this.props.match.params.userId))}
        </Typography>
      </Typography>
      {this.addPhotos()}
    );
  }
}

export default UserPhotos;
