import React  from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,Badge,circle
}
from '@material-ui/core';
import './userList.css';
import CommentIcon from '@material-ui/icons/Comment';
import PhotoIcon from '@material-ui/icons/Photo';
import Axios from 'axios'
var async = require('async');
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
      prevProps:props,
      engage:'',
      addBubbles:'',
      commentPhoto:'',
      logged_in:'',
      areYouLoggedIn:''
    }
  }

  componentDidMount(){
    console.log('UserList componentDidMount prevProps:',this.state.prevProps)
    console.log('UserList componentDidMount props:',this.props)
    //this.setState({areYouLoggedIn:this.props.isLoggedIn})
    //if(this.props.isLoggedIn===undefined){
    //  console.log('UserList componentDidMount this.props.isLoggedIn is undefined. cant do anything!!!')
    //}
    //we cant print this. we have to stop at first level of undefined, this.props!
    //if(this.props.isLoggedIn===undefined){
    //  console.log("UserList componentDidMount this.props.isLoggedIn undefined can we print this?",this.porps.isLoggedIn)
    //}
    //console.log("userList componentDidMount this.props.isLoggedIn",this.props.isLoggedIn)
    //console.log("userList componentDidMount this.prevProps.userIdArr",this.prevProps.userIdArr)
    //console.log("userList componentDidMount this.props.isEngage",this.props.isEngage)
    
    //why is usrIdArr from prevProps? huh? bc props is invalid at this point. But prevProps is prob now invalid also bc of login. 
    //login is prob invalid also at this point. We can do web access in this component. Doesnt have to be in photoshare. Who else needs
    //user list? UserDetail
    let fm = this.state.prevProps.userIdArr
    let en = this.props.isEngage
    console.log("UserList componentDidMount this.state before init:",this.state)
    //why set state here? it means this.props is never undefined. We dont have to do this
    //intead you can test for this.props!==undefined
    this.setState({userId:fm,engage:en,areYouLoggedIn:this.props.isLoggedIn,logged_in:this.props.photoShareLoginState},
      function(){console.log("UserList componentDidMount after setState:",this.state)
    })
  }
  
  //called if we call setState in componentDidMount, else this isnt called
  componentDidUpdate(){
    console.log("userList componentDidUpdate,this.state:",this.state)
    console.log("userList componentDidUpdate props:",this.props)
    console.log("userList componentDidUpdate this.state.prevProps:",this.state.prevProps)
    
    //cant read level down in undefined
    //console.log("userList componentDidUpdate this.props.isLoggedIn",this.props.isLoggedIn)
    //console.log("userList componentDidMount this.prevProps.userIdArr",this.prevProps.userIdArr)
    //console.log("userList componentDidMount this.props.isEngage",this.props.isEngage)
    if(this.props!==undefined && this.props.isLoggedIn!==undefined)
    {
      console.log("userList componentDidUpdate this.props not undefined!!!!")
      console.log("userList componentDidUpdate,this.state:",this.state)
      console.log("userList componentDidUpdate this.props:",this.props)
      console.log("userList componentDidUpdate this.props.isLoggedIn:",this.props.isLoggedIn)
      console.log("userList componentDidUpdate this.props.areYouLoggedIn:",this.state.areYouLoggedIn)
      console.log("userList componentDidUpdate this.props.isEngage:",this.props.isEngage)

      //this.setState({userId:this.props.userIdArr})
      console.log("userList componentDidUpdate this.state.prevProps:",this.state.prevProps)
      if(this.props.isEngage!==this.state.engage)
      {
         console.log('UserList componentDidUpdate setEngage!!!!!!!!!!!')
         this.setState({engage:this.props.isEngage})
      } 
      if(this.props.isLoggedIn!==this.state.areYouLoggedIn)
      { 
        console.log('UserList componentDidUpdate setLogin and web request!!!!!!!!!!! this.props:',this.props)
        console.log('UserList componentDidUpdate setLogin and web request!!!!!!!!!!! this.prevProps.:',this.state.prevProps)
        console.log('UserList componentDidUpdate setLogin and web request!!!!!!!!!!! this.props.isLoggedIn:',this.props.isLoggedIn)        
        console.log('UserList componentDidUpdate setLogin and web request!!!!!!!!!!! this.state.areYouLoggedIn:',this.state.areYouLoggedIn)
        console.log('UserList componentDidUpdate setLogin and web request!!!!!!!!!!! this.props.userIdArr:',this.props.userIdArr)
        console.log('UserList componentDidUpdate setLogin and web request!!!!!!!!!!! this.state.userId:',this.state.userId)
        this.setState({areYouLoggedIn:this.props.isLoggedIn})
      }
      if(this.props && this.props.userIdArr.length>1 && this.props.userIdArr!==this.state.userId){
        console.log("UserList componentDidUpdate userIDArr valid and setState to this.state.userId!!!!!")
        this.setState({userId:this.props.userIdArr},function(){
          console.log("UserList componentDidUpdate this.state.userId after setState!!!!!!!",this.state)
        })
      }
   
      if(this.state.prevProps!==undefined && this.state.prevProps.userIdArr!==undefined){
        console.log('UserList compondntDidMount setUserIdAddr!!!!!!!!!!! len:',this.state.prevProps.userIdArr.length)
        let arr=[]
        for (let i=0;i<this.state.prevProps.userIdArr.length;i++){
          console.log("userList componentDidMount id:",this.state.prevProps.userIdArr[i]._id)
          Axios.get(`http://localhost:3000/commentsOfUser/${this.state.prevProps.userIdArr[i]._id}`).then(data=>{
            //console.log("componentDidMount data:",data)
            let obj ={
              'id':this.state.prevProps.userIdArr[i]._id,
              'numComments':data.data.numPhotos,
              'numPhotos': data.data.numComments
            }
            arr.push(obj)
          }) //end then
          .catch(error=>console.log(error))
          console.log("Userlist ComponentDudUpdate 2 problems")
          console.log("this.state.prevProps.userIdArr never set:",this.state.prevProps.userIdArr)
          console.log('never did anything with arr:',arr)
          console.log("UserList componentDidUpdate arr:", arr)
          this.setState({commentPhoto:arr})
        }//end for
      }
        

    }
  }

  handleNewUser = (event) =>{
    this.props.onNewUserID(event.currentTarget.getAttribute('value'))
  }

  handleClick=(event)=>{ 
    this.setState({
      clickedUser:event.target.childNodes[0],
      current_userId:event.currentTarget.getAttribute('value')},()=>{
        //console.log("verify state UserList:",this.state)
      })
    this.handleNewUser(event)
  }

  addBubbles(id){
    //console.log("addBubbles:id",id,this.state.engage,this.props.isEngage)
    //console.log(this.state.commentPhoto.find(x=>x.id===id))
    return(
      <div>
      <CommentIcon className='badge' ></CommentIcon>
      <Badge color="primary" badgeContent={this.state.commentPhoto.find(x=>x.id===id).numComments} >
      {circle}
      </Badge>
      <PhotoIcon></PhotoIcon>
      <Badge color="secondary" badgeContent={this.state.commentPhoto.find(x=>x.id===id).numPhotos} >
      {circle}
      </Badge>
      </div>
      )
  }

  append(){
    let e=[]
    console.log("************UserList append this.state.userId:",this.state.userId)
    if(this.state.userId && this.state.userId.length>1){
      console.log("************UserList append this.state.userId VALID:")
      this.state.userId.map(x=>{
        e.push(
          <div key={x._id}>
          <ListItem >
            <ListItemText onClick = {this.handleClick} value={x._id} primary={x.first_name+" "+x.last_name}></ListItemText>
            {(this.props.isEngage===true) ? this.addBubbles(x._id):0 }

          </ListItem>
          <Divider />
          </div>
      )  
      })
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
