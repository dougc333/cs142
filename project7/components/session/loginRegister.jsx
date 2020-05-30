import React from 'react';
import {
  TextField,Button
} from '@material-ui/core';
import axios from 'axios';


class LoginRegister extends React.Component{
  constructor(props){
    super(props)
    this.state={
        password:'',
        login_name:'',
        first_name:'',
        last_name:'',
        userId:'',
        logged_in:''
    }
  }

  componentDidMount(){
    console.log("loginRegister componentDidMount")
  }
  componentDidUpdate(){
    console.log("loginRegister componentDidUpdate this.state",this.state)
  }

  //have to use arrow function in axios.then((response)=> vs. function(response){}
  //or get error cannot-read-property-setstate-of-undefined
  // this.props.loginState(this.state) from parent component. Code for loginState is in photoshare.jsx
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log("loginRegister handleSubmit e:",e)
    console.log("loginRegister handleSubmit this.state:",this.state)
    axios.post('http://localhost:3000/admin/login',this.state)
    .then((response)=>{
        console.log("loginRegister handleSubmit /admin/login response.data:",response.data)
        //console.log("loginRegister handleSubmit userId response.data._id:",response.data._id)
        //console.log("loginRegister handleSubmit first_name response.data.first_name:",response.data.first_name)
        //console.log("loginRegister handleSubmit last_name response.data.last_name:",response.data.last_name)
        this.setState({
          first_name:response.data.first_name,
          last_name:response.data.last_name,
          userId:response.data._id,
          logged_in:true
        })
        console.log("loginRegister handleSubmit state after setState:",this.state)
        console.log("loginRegister calling this.props.loginState from photoShare")
        this.props.loginState(this.state)
        })//end then
    .catch(function(err){console.log('loginRegister axios post admin/login error!!!!',err)})
  }

  handleChangeUserName=(e)=>{
    console.log("loginRegister handleChangeUserName e.target.value",e.target.value)
    this.setState({login_name:e.target.value})
  }

  handleChangePassword=(e)=>{
    console.log("loginRegister handleChangePassword e.target.value:",e.target.value)
    this.setState({password:e.target.value})
  }

  render(){
      return(
        <form onSubmit={this.handleSubmit}>
            <div>
            <TextField type="text" name='login_name' placeholder="Malcolm Took" value={this.state.login_name || ''} onChange={this.handleChangeUserName}/>LoginName
            </div>
            <div>
            <TextField type="text" name='password' placeholder="weak" value={this.state.password || ''} onChange={this.handleChangePassword}/> Password
            </div>
         <Button type="submit" value="Submit" >Submit</Button>
        </form>       
      )
  }
}

export default LoginRegister