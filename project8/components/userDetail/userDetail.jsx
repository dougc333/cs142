import React from 'react';
import {
  Typography,Link
} from '@material-ui/core';
import './userDetail.css';
import Axios from 'axios';


class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      usrid:this.props.match.params.userId,
      fetch_usrdet:'',
      prevProps:props,
      popUp:false,
      addComment:''
    }     
  }
  
  handleComment=(c)=>{
    //console.log("UserDetail handleCOmment:",c)
    this.setState({addComment:c},function(){
      //console.log("UserDetail handleComment setState completed:",this.state)
    })
  }

  componentDidMount(){
    //console.log("UserDetail componentDidMount prevProps:",this.state.prevProps)
    //console.log("UserDetail componentDidMount props:",this.state.props)
    Axios.get(`http://localhost:3000/user/${this.props.match.params.userId}`)
    .then(response=>{
      //console.log("UserDetail then data",data); 
       this.setState({fetch_usrdet:response.data}
       //,function(){
       //console.log("UserDetail fetch this.state.fetch_userdet:",this.state.fetch_usrdet)
       //}
      )})
    .catch(error=>console.log(error))
    
  }

  componentDidUpdate(){
    //console.log("UserDetail componentDidUpdate prevProps:",this.state.prevProps)
    //console.log("UserDetail componentDidUpdate props userId:",this.props.match.params.userId)
    //console.log("UserDetail componentDidUpdate fetch_userdet:",this.fetch_usrdet)
    
    if (this.state.usrid !== this.props.match.params.userId){
    Axios.get(`http://localhost:3000/user/${this.props.match.params.userId}`)
    .then(response=>{
      //console.log("UserDetail ComponentDidMount then data",data); 
      this.setState({fetch_usrdet:response.data,usrid:this.props.match.params.userId}
      //,function(){
      //console.log("UserDetail ComponentDidMount this.state.fetch_userdet:",this.state.fetch_usrdet)
      //}
      )})
    .catch(error=>console.log(error))
   
    }
  }
 
  appendMe=()=>{
    //console.log("appendMe this.props.match.params.userId:",this.props.match.params.userId)
    //console.log("appendMe this.state.fetch_usrdet:",this.state.fetch_usrdet)                 
    return (
      <Typography component={'div'} color="primary" key={this.state.fetch_usrdet._id}>
        <div>{this.state.fetch_usrdet.first_name+" "+this.state.fetch_usrdet.last_name }</div>
        <div  className="txt-color">Description:{this.state.fetch_usrdet.description}</div>
        <div  className="txt-color">Location:{this.state.fetch_usrdet.location}</div>
        <div  className="txt-color">Occupation:{this.state.fetch_usrdet.occupation}</div>
      </Typography>
    
    )
  }
  appendLink(){
    //console.log("UserDetail appendLink: propsUserId:",this.props.match.params.userId)
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
    ); //end return
  }
}

export default UserDetail;
