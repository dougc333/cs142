import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch,Redirect
} from 'react-router-dom';
import {
  Grid, Typography, Paper
} from '@material-ui/core';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';
import { conditionalExpression } from '@babel/types';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userId:window.cs142models.userListModel(),
      current_userId:'',
      current_userName:''
    }
  }

  //passed to Userlist, click on UserList element executes and returns newUserId 
  set_CurrentUserID = (newUserId) => {
    console.log("photoShare set_currentUserID newUserId:",newUserId)
    this.setState({current_userId:newUserId, current_userName:this.getName(newUserId)},function(){
      console.log("photoshare verify state:",this.state)
    });
    
  }

  getUserID=()=>{
    console.log("getUserID")
    return this.state.current_userId;
  }
  //input: userid 
  //output: returns name for given userid 
  getName(uid){
    console.log("getName uid:",uid)
    //console.log("getName entries:",Object.entries(this.state.userId))
    for (let i =0;i<Object.entries(this.state.userId).length;i++ ){
      //console.log("x:",Object.entries(this.state.userId)[i][1]['_id'])
      if(Object.entries(this.state.userId)[i][1]['_id']===uid){
        return Object.entries(this.state.userId)[i][1]['first_name']+" "+Object.entries(this.state.userId)[i][1]['last_name']
      }
    }
    
  }
  componentDidUpdate(){
    console.log("photoShare componentDidUpdate! this.state.current_userId",this.state.current_userId)
    this.redirectMe()
  }

  redirectMe(){
    if( this.state.current_userId.length>1) {
      return <div><Redirect to = {`/users/${this.state.current_userId}`} /></div>
    } 
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar usrid={this.state.current_userName}/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
            <UserList userIdArr={this.state.userId} onNewUserID={this.set_CurrentUserID } />
            {this.redirectMe()}
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="cs142-main-grid-item">
            <Switch>
              <Route path="/users/:userId"
                render={ props => <UserDetail  {...props} /> }
              />
              <Route path="/photos/:userId"
                render ={ props => <UserPhotos {...props} /> }
              />
              <Route path="/users" component={UserList}  />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);
