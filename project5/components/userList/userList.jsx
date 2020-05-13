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
    //this.userId = window.cs142models.userListModel();
    this.userId = props.userIdArr;
    console.log("UserList ctor userId:",this.userId);
    this.state={
      clickedUser:'',
      current_userId:''
    }
  }

  handleNewUser = (event) =>{
    this.props.onNewUserID(event.currentTarget.getAttribute('value'))
  }

  handleClick=(event)=>{
    console.log("handleClick event.currentTarget.getAttribute('value')",event.currentTarget.getAttribute('value'))    
    console.log("handleClick event.target.childNodes:",event.target.childNodes[0]);
    console.log("handleClick event.currentTarget.childNodes:",event.currentTarget.childNodes[0]);
    
    this.setState({
      clickedUser:event.target.childNodes[0],
      current_userId:event.currentTarget.getAttribute('value')},()=>{
        console.log("verify state UserList:",this.state)
      })
    
    this.handleNewUser(event)
  }

  render() {
    return (
      <div>
        <List component="nav">
          {this.userId.map( (user)=>
          <div key={user._id} >
          <ListItem onClick={this.handleClick} value={user._id}>
           <ListItemText  primary={user.first_name+" "+user.last_name}></ListItemText>
          </ListItem>
          <Divider/>
          </div>
          )}
        </List>
      </div>
    );
  }
}

export default UserList;
