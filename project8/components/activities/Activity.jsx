import React from 'react';
import {
  TextField,Button, Typography
} from '@material-ui/core';
import axios from 'axios';



class Activity extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user_id:'',
      display_results:'',
    }
  }

  componentDidMount(){
    console.log("Activity componentDidMount")
    this.setState({user_id:this.props.userId},function(){
      console.log("Activity componentDidMount state:",this.state)
    })
  }

  componentDidUpdate(){
    console.log("Activity componentDidUpdate this.state.user_id:",this.state.user_id, " this.props.userId:", this.props.userId)
    if(this.state.user_id!==this.props.userId){
      this.setState({user_id:this.props.userId})
      axios.get(`/act/${this.state.user_id}`)
      .then(res=>{
        console.log("res:",res)
        this.setState({display_results:res})
      })
      .catch(err=>console.log(err))
  
    }
  }

  format(){
    let arr=[]
    for (let i=0;i<this.state.display_results.length;i++){
      console.log(this.state.display_results[i])
      if(this.state.display_results[i].type==='login' ||this.state.display_results[i].type==='logout' || this.state.display_results[i].type==='registerNew'){
        arr.push(
        <div>
        <Typography>Activity Type:{this.state.display_results[i].type}</Typography>  
        <Typography>Date_time:{this.state.display_results[i].date_time}</Typography>
        </div>
        )
      }
      if(this.state.display_results[i].type==='addComment'){
        arr.push(
          <div>
          <Typography>Activity Type:{this.state.display_results[i].type}</Typography>  
          <Typography>Date_time:{this.state.display_results[i].file_name}</Typography>          
          </div>
          )
      }
    }

    return arr;
  }

  render(){
    return(
      <div>
      <div>
        asdfasfasdfasdfasdfasd
      asdfasfasdfasdfasdfasdas
      asdfasfasdfasdfasdfasd
      </div>
      <div>
      asdfasfasdfasdfasdfasd
    asdfasfasdfasdfasdfasdas
    asdfasfasdfasdfasdfasd
    </div>
    <div>
    asdfasfasdfasdfasdfasd
  asdfasfasdfasdfasdfasdas
  asdfasfasdfasdfasdfasd
  </div>
  {this.format()}
  </div>
    );
  }
}//end Component

export default Activity