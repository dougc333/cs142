import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';
import { cloneNode } from '@babel/types';
//import fetchModel from './lib/fetchModelData'

//import *.jpg from './images/';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    //this is just one photo? we need to parse all this?
    //where is comment field?
    this.photo={
     _id:'',
     first_name:'',
     last_name:'',
     location:'',
     description:'',
     occupation:''
    }
    console.log("UserPhotos ctor userId:",this.props.match.params.userId)
    this.state={
      photos: window.cs142models.photoOfUserModel(this.props.match.params.userId),
      userId:this.props.match.params.userId
    }
  }

  componentDidMount(){
    console.log("UserPhotos componentDidMount********** userId:",this.props.match.params.userId)
    if (this.state.userId !== this.props.match.params.userId){
      this.setState({
        photos:window.cs142models.userModel(this.props.match.params.userId),
        userId:this.props.match.params.userId
      })
    }
    //this.addPhotos()
  }

  componentDidUpdate(){
    console.log("UserPhotos componentDidUpdate++++++++++++++++++ userId:",this.props.match.params.userId)
    if (this.state.userId !== this.props.match.params.userId){
      this.setState({
        photos:window.cs142models.userModel(this.props.match.params.userId),
        userId:this.props.match.params.userId
      })
    }
  }

  fetchPhotoData(){
    fetchData
  }

  addPhotos(){
    let userPhotos=[]
    console.log("addPhotos")
    for (let i=0;i<(window.cs142models.photoOfUserModel(this.props.match.params.userId).length);i++){
      //console.log("addPhotos object:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i])
      //console.log("*******addPhotos COMMENTS:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments)
      userPhotos.push(
        <img 
          key={window.cs142models.photoOfUserModel(this.props.match.params.userId)[i]._id} 
          src={ '/images/'+window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].file_name} 
        />)
      if(window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments!==undefined){
        console.log("len:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments.length) 
        for (let j=0;j<window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments.length;j++){
          console.log("comment:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].comment)
          //console.log("user:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user)
          console.log("user first_name:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.first_name)
          console.log("user last_name:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.last_name)
          //console.log("location:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.location)
          userPhotos.push(
            <Typography comonent='span' variant="body2">
              <Typography component='span' variant='body1'>
                User:{" "+window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.first_name+" "} 
                {window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.last_name+": "}
                </Typography>
              {window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].comment}
            </Typography>
           )
         }
        } 
      }
      return userPhotos  
  }//end addPhotos

  render() {
    return (
      <Typography variant="body1">
        {this.addPhotos()}
      </Typography>
      
    );
  }
}

export default UserPhotos;
