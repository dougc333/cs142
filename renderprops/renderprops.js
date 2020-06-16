import React from 'react'
import ReactDOM from 'react-dom'



class MouseTracker extends React.Component{
  constructor(props){
    super(props)
    this.state={
      x:0,
      y:0,
    }
  }
  handleMouseMove=(e)=>{
    this.setState({
      x:e.clientX,
      y:e.clientY,
    })
  }

  render(){
    return(
      <div style={{height:'100vh'}} onClick={this.handleMouseMove}>
        <h1>move mouse</h1>
    <p>mouse pos:{this.state.x},{this.state.y}</p>
      </div>  
    )
  }
}

export default MouseTracker