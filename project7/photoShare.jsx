import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch,Redirect
} from 'react-router-dom';
import {
  Grid, Paper
} from '@material-ui/core';
import './styles/main.css';
import fetchModel from './lib/fetchModelData'
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';
import SinglePhoto from './components/userPhotos/SinglePhoto'
import axios from 'axios'
import LoginRegister from './components/session/loginRegister';


class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      prevLogin:'',
      userId:'',
      current_userId:'',
      current_userName:'', //same as logged in name
      fetchData:'',
      prevProps:props,
      photoInfo:'',
      engage:'',
      logged_in:'',
      isLoggedIn:''
    }
  }

  //login passed to loginRegister component
  setLogin = (c)=>{
    console.log("photoShare setLogin")
    this.setState({logged_in:c,prevLogin:false,isLoggedIn:true})
  }
  //logout passed to topbar component
  setLogout=(c)=>{
    console.log("photoshare logout, c:",c)
    if(c===false){
      this.setState({logged_in:''}) //set back to undefined 
    }
  }

  //passed to topbar for advanced features
  setEngage=(c)=>{
    console.log("photoshare setEngage:",c)
    this.setState({engage:c})
  }

  //passed to userphotos
  photosMount=(setPhotos)=>{
    //console.log("******photosMount:",setPhotos)
    this.setState({photoInfo:setPhotos})
  }
  //passed to Userlist, click on UserList element executes and returns newUserId 
  set_CurrentUserID = (newUserId) => {
    //console.log("******photoShare set_currentUserID newUserId:",newUserId)
    this.setState({current_userId:newUserId, current_userName:this.getName(newUserId)},function(){
      //console.log("photoshare verify state:",this.state)
    }); 
  }

  //input: userid 
  //output: returns name for given userid 
  getName(uid){
    //console.log("photoShare getName uid:",uid)
    //console.log("****getName entries:",Object.entries(this.state.fetchData))
    for (let i =0;i<Object.entries(this.state.fetchData).length;i++ ){
      //console.log("x:",Object.entries(this.state.fetchData)[i][1]['_id'])
      if(Object.entries(this.state.fetchData)[i][1]['_id']===uid){
        return Object.entries(this.state.fetchData)[i][1]['first_name']+" "+Object.entries(this.state.fetchData)[i][1]['last_name']
      }
    } 
  }

  componentDidMount(){
    console.log("photoshare ComponentDidMount prevProps:",this.state.prevProps)
    console.log("photoshare ComponentDidMount this.state:",this.state)
    console.log("photoshare ComponentDidMount this.props:",this.props)
    //if logged in do this
    //move to componentDidUpdate 
    //this.setState({prevProps.logged_in:this.props})
  }
  
  componentDidUpdate(){
    console.log("photoshare componentDidUpdate this.state:",this.state)
    console.log("photoshare componentDidUpdate this.state.logged_in:",this.state.logged_in)
    console.log("photoshare componentDidUpdate this.prevProps:",this.state.prevProps)
    console.log("photoshare componentDidUpdate this.state.prevLogin:",this.state.prevLogin)
    console.log("photoshare componentDidUpdate this.state.isLoggedIn:",this.state.isLoggedIn)
    
    //console.log("photoshare componentDidUpdate this.prevProps.logged_in:",this.prevProps.logged_in)
    
    if(this.state.isLoggedIn!==undefined && this.state.prevLogin!==this.state.isLoggedIn){
      console.log("after test photoshare componentDidUpdate this.state:",this.state)
      console.log("after test photoshare componentDidUpdate this.state.prevProps:",this.state.prevProps)
      
      this.setState({prevProps:this.props,prevLogin:true})
      console.log("logged in photoshare componentDidUpdate this.state.logged_in:",this.state.logged_in)
      console.log("logged in photoshare componentDidUpdate this.state:",this.state)
      
      console.log('photoShare axios get /user/list')
      axios.get('http://localhost:3000/user/list')
    .then((response)=>{
      console.log("PHOTOSHARE then data",response.data); 
      this.setState({fetchData:response.data}
      ,function(){
      console.log("PHOTOSHARE compnentDidUpdate after setState this.state.fetchData:",this.state.fetchData);
      console.log("PHOTOSHARE compnentDidUpdate after setState this.state:",this.state);
      
      console.log("PHOTOSHARE this.state.fetchData valid!!!!");
      }
      )
    })
    .catch(error=>console.log(error))
    }
    //this.redirectMe()
    //should reset the state and let react rerender. 
  }

  redirectMe(){
    //replace w/if logged in this.state.current_userId.length>1
    //change the redirect to componentDidUpdate?
    if(this.state.logged_in){
    console.log("redirectMe photoshare this.state.logged_in.length:",this.state.logged_in)
    console.log("redirectMe photoshare this.state.current_userId:",this.state.current_userId)
    if( this.state.logged_in) {
      return <div><Redirect to = {`/users/${this.state.current_userId}`} /></div>
    } 
  }
  }

  add(){
    //if we do test here is data valid at userlist for display?
    //if logged in and fetchData.length >1
    //if (this.state.fetch){
      //console.log("ADD**** this.state.fetchData:",this.state.fetchData)
      return (
        <div>
      <UserList userIdArr={this.state.fetchData} onNewUserID={this.set_CurrentUserID } isEngage={this.state.engage} isLoggedIn={this.state.isLoggedIn} photoShareLoginState={this.state.logged_in} />
      </div>
      )
    //}
  }

  appendPhotos(){
    if(!this.state.engage){
      return (<Route path="/photos/:userId"
      render ={ props => <UserPhotos didMount={this.photosMount} {...props} /> }
      />)
    }else{
      return (<Route path="/photos/:userId/"
        render ={ props => <SinglePhoto didMount={this.photosMount} {...props} /> }
      />)
    }
  }
//onLogOut={this.logOut}
  render() {
    return (
      
      <HashRouter>
      <div>
      <div>sdfsdfsd</div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar usrid={this.state.current_userName} photoInfo={this.state.photoInfo} onCheckBox={this.setEngage} loginInfo={this.state.logged_in} onLogOut={this.setLogout} />
        </Grid>
        <div className="cs142-main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
            {this.add()}
            {this.redirectMe()}
            fffffff
          </Paper>
        </Grid>
        <Grid item sm={9}>
         <LoginRegister loginState = {this.setLogin}/>
          <Paper className="cs142-main-grid-item">
          vvvvvvv
            <Switch>
              <Route path="/users/:userId"
                render={ props => <UserDetail  {...props} /> }
              />
              {this.appendPhotos()}
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
