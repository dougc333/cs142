import React from 'react';
import {
  Typography,Link
} from '@material-ui/core';
import './userPhotos.css';
import { cloneNode } from '@babel/types';
import fetchModel from '../../lib/fetchModelData'

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    console.log("UserPhotos ctor userId:",this.props.match.params.userId)
    this.state={
      photos: '',
      userId: this.props.match.params.userId
    }
    ///photosOfUser/:id
    fetchModel(`http://localhost:3000/photosOfUser/${this.props.match.params.userId}`)
    .then(data=>{console.log("UserPhotos ctor then data",data); this.setState({photos:JSON.parse(data),userId:this.props.match.params.userId},function(){
      console.log("UserPhotos ctor this.state.photos:",this.state.photos)
    })})
    .catch(error=>console.log(error))

  }

  componentDidMount(){
    console.log("UserPhotos componentDidMount********** userId:",this.props.match.params.userId)
    console.log("UserPhotos componentDidMount********** photos:",this.state.photos)
  }

  componentDidUpdate(){
    console.log("UserPhotos componentDidUpdate++++++++++++++++++ userId:",this.props.match.params.userId)
    if (this.state.userId !== this.props.match.params.userId){
    fetchModel(`http://localhost:3000/photosOfUser/${this.props.match.params.userId}`)
    .then(data=>{console.log("UserPhotos componentDidUpdate then data",data); this.setState({photos:JSON.parse(data),userId:this.props.match.params.userId},function(){
      console.log("UserPhotos componentDidUpdate this.state.photos:",this.state.photos)
    })})
    .catch(error=>console.log(error))
    }
  }

  addPhotos(){
    let userPhotos=[]
    console.log("addPhotos")
    console.log("addPhotos userId:",this.props.match.params.userId)
    console.log("addPhotos this.state.photos:",this.state.photos)
    
    for (let i=0;i<(this.state.photos.length);i++){
      console.log("addPhotos:",this.state.photos[i]) 
      userPhotos.push(
        <img className='img-style'
          key={this.state.photos[i]._id} 
          src={ '/images/'+this.state.photos[i].file_name} 
        />)
      if(this.state.photos[i].comments!==undefined){
        console.log("addPhotos comments:",this.state.photos[i].comments) 
        for (let j=0;j<this.state.photos[i].comments.length;j++){
          console.log("addPhotos comments user:",this.state.photos[i].comments[j].user) 
          console.log("addPhotos comments user _id:",this.state.photos[i].comments[j].user._id) 
          userPhotos.push(
            <Typography component="div" variant="body2" key={Math.random()}>
                <div>
                  <div>
                    <Link color="primary" 
                        href={'http://localhost:3000/photo-share.html#/users/'+
                        this.state.photos[i].comments[j].user._id}>User
                    </Link>
                    {" "+this.state.photos[i].comments[j].user.first_name+" "} 
                  {this.state.photos[i].comments[j].user.last_name+" :"}</div>
                  <div>{this.state.photos[i].comments[j].comment}  </div>
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
