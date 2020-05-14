import React from 'react';
import {
  Typography,Link
} from '@material-ui/core';
import './userPhotos.css';
import { cloneNode } from '@babel/types';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    console.log("UserPhotos ctor userId:",this.props.match.params.userId)
    this.state={
      photos: window.cs142models.photoOfUserModel(this.props.match.params.userId),
      userId: this.props.match.params.userId
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

  addPhotos(){
    let userPhotos=[]
    console.log("addPhotos")
    for (let i=0;i<(window.cs142models.photoOfUserModel(this.props.match.params.userId).length);i++){
      console.log("addPhotos:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i]) 
      userPhotos.push(
        <img className='img-style'
          key={window.cs142models.photoOfUserModel(this.props.match.params.userId)[i]._id} 
          src={ '/images/'+window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].file_name} 
        />)
      if(window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments!==undefined){
        console.log("addPhotos comments:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments) 
        for (let j=0;j<window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments.length;j++){
          console.log("addPhotos comments user:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user) 
          console.log("addPhotos comments user:",window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user._id) 
          userPhotos.push(
            <Typography component="div" variant="body2" key={Math.random()}>
                <div>
                  <div ><span className="user-color">User</span>{" "+window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.first_name+" "} 
                  {window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].user.last_name+" :"}</div>
                  <div>{window.cs142models.photoOfUserModel(this.props.match.params.userId)[i].comments[j].comment}  </div>
                </div>
            </Typography>  
          )
        }
      }//end comments 
    }
    return userPhotos  
  }//end addPhotos

  render() {
    return (
      <Typography component={"div"} variant="body1">
        {this.addPhotos()}
      </Typography>
    );
  }
}

export default UserPhotos;
