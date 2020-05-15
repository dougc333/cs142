import React from 'react';
import {
  Typography,Link
} from '@material-ui/core';
import './userDetail.css';
import fetchModel from '../../lib/fetchModelData'

import { forOfStatement, thisTypeAnnotation } from '@babel/types';

//window.cs142models.userModel(this.props.match.params.userId)
/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      usrdet: '',
      usrid:'',
      fetch_usrdet:''
    }    
    console.log("UserDetail ctor propsUserId:",this.props.match.params.userId)
    console.log("UserDetail ctor:",this.state.usrdet)

    fetchModel(`http://localhost:3000/user/${this.props.match.params.userId}`)
    .then(data=>{console.log("UserDetail then data",data); this.setState({fetch_usrdet:JSON.parse(data)},function(){
      console.log("UserDetail fetch this.state.fetch_userdet:",this.state.fetch_usrdet)
    })})
    .catch(error=>console.log(error))
    console.log("ctor fetch_usrdet:",this.state.fetch_usrdet)
  }
  
  componentDidMount(){
    console.log("UserDetail componentDidMount$$$$$$$$$")
    console.log("UserDetail componentDidMount this.state.match.userId:",this.props.match.params.userId)
    console.log("UserDetail componentDidMount this.state.fetch_userdet:",this.state.fetch_usrdet)
    //console.log("UserDetail componentDidMount$$$$$$$$$")
    //console.log("UserDetail componentDidMount$$$$$$$$$")
    
  }

  componentDidUpdate(){
    console.log("UserDetail componentDidUpdate props userId:",this.props.match.params.userId)
    console.log("UserDetail componentDidUpdate fetch_userdet:",this.fetch_usrdet)
    if (this.state.usrid !== this.props.match.params.userId){
    fetchModel(`http://localhost:3000/user/${this.props.match.params.userId}`)
    .then(data=>{console.log("UserDetail ComponentDidMount then data",data); this.setState({fetch_usrdet:JSON.parse(data), usrid:this.props.match.params.userId},function(){
      console.log("UserDetail ComponentDidMount this.state.fetch_userdet:",this.state.fetch_usrdet)
    })})
    .catch(error=>console.log(error))
   
    }
  }
 
  appendMe=()=>{
    console.log("appendMe this.props.match.params.userId:",this.props.match.params.userId)
    console.log("appendMe this.state.fetch_usrdet:",this.state.fetch_usrdet)                 
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
