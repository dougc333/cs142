import React from 'react';
import {
  AppBar, Toolbar, Typography,Checkbox,Button, TextField
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      prevProps:props,
      name:'',
      old:'',
      checked:false,
      login_info:'',
    }
  }

  componentDidUpdate=()=>{
    //console.log("topbar componentdidupdate prevProps:",this.state.prevProps)
    console.log("topbar componentdidupdate props:",this.props)
    //console.log("topbar componentdidupdate this.props.photoInfo;",this.props.photoInfo)
    //console.log("topbar componentdidupdate this.props.loginInfo:",this.props.loginInfo)
    //console.log("topbar componentdidupdate this.state.prevProps.login_info:",this.state.prevProps.login_info)
    console.log("topbar componentdidupdate this.state:",this.state)
    //console.log("topbar componentdidupdate this.state.prevProps.login_info.login_name:",this.state.prevProps.login_info.login_name)
    //console.log("topbar componentdidupdate this.props.loginInfo.login_name:",this.props.loginInfo.login_name)
   
    if (this.state.old!==this.props.photoInfo){
      console.log("topbar componentdidupdate photoInfo setState this.state!!!!!!:",this.state)
      if(this.props.photoInfo===true){
        this.setState({name:"Photo",old:this.props.photoInfo})
      }else{
        this.setState({name:"Name",old:this.props.photoInfo})
      }
    }
    if(this.state.login_info!==this.props.loginInfo){
      console.log("topbar componentDidUpdate login_info setState login_name!!!!!")
      this.setState({login_info:this.props.loginInfo})
      //this.displayLogin()
    }else{
      //console.log("topbar componentDidUpdate no login update")
    }
  }

  handleChange=(e)=>{
    //console.log("topbar handleChange e.currentTarget.value",e.currentTarget.value)
    //console.log("handleChange topbar checked before setState:",this.state.checked)
    //console.log("topbar handleChange event.currentTarget.getAttribute('value')",event.currentTarget.getAttribute('value'))
    this.setState({checked:!this.state.checked},function(){
      this.props.onCheckBox(this.state.checked); 
      //console.log("topBar handleChange checked:",this.state.checked)
    })
  }
  
  displayLogin=()=>{
    if(this.state.login_info!=='' && this.state.login_info!==undefined){
      {console.log("a",this.state.login_info.login_name)}
      return(
        <Typography variant="h5" color="inherit" component='span' style={{ flex: 1 }}>
          Login Name: {this.state.login_info.login_name} 
        </Typography>
      )
    }else if(this.state.login_name===''){
      {console.log("b")}
      return(
      <Typography variant="h5" color="inherit" component='span' style={{ flex: 1 }}>
         Please Login: {this.state.login_info.login_name} 
      </Typography>
      )
    }
  }
  
  //need function from parent, photoshare
  handleButton=(e)=>{
    console.log("topbar logout!!!!!! this.state:",this.state)
    this.props.onLogOut()
    //this.props.onLogOut(false)
  }

//<Button  onClick={this.handleButton} ></Button>
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute" >
        <Toolbar>
          <Typography variant="h5" color="inherit" component='span' style={{ flex: 1 }}>
          Name:DC
          </Typography>
          {this.displayLogin()}
          Engage
          <Checkbox
            onChange={this.handleChange}
            value="checkedA"
            inputProps={{ 'aria-label': 'Checkbox A' }}
          />
          <Button onClick={this.handleButton}><span className="logout-button-style">Logout</span></Button>
          <Typography variant="h5" color="inherit" component='span' style={{ flex: 1 }}>
          User {this.state.name} :{this.props.usrid}
          </Typography>
        </Toolbar>
        
      </AppBar>
    );
  }
}

export default TopBar;
