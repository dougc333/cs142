import React, { useImperativeHandle } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userId : '',
      clickedUser:'',
      current_userId:'',
      prevProps:this.props,
    }
  }

  componentDidMount(){
    let fm = this.state.prevProps.userIdArr
    this.setState({userId:fm})
    
  }
  //called if we call setState in componentDidMount, else this isnt called
  componentDidUpdate(){
  }

  handleNewUser = (event) =>{
    this.props.onNewUserID(event.currentTarget.getAttribute('value'))
  }

  handleClick=(event)=>{ 
    this.setState({
      clickedUser:event.target.childNodes[0],
      current_userId:event.currentTarget.getAttribute('value')},()=>{
        console.log("verify state UserList:",this.state)
      })
    this.handleNewUser(event)
  }

  append(){
    let e=[]
    for(let i=0;i<this.state.userId.length;i++){
      e.push(
          <div key={this.state.userId[i]._id}>
          <ListItem >
            <ListItemText onClick = {this.handleClick} value={this.state.userId[i]._id} primary={this.state.userId[i].first_name+" "+this.state.userId[i].last_name}>{i}</ListItemText>
          </ListItem>
          <Divider />
          </div>
      )
    }
    return e
  }

  render() {
    return (
        <List component="nav">
           {this.append()}
        </List>
    );
  }
}

export default UserList;
