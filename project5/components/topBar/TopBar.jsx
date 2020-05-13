import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("TopBar ctor",this.props)
  }
  componentDidUpdate(){
    console.log("topbar componentdidupdate")
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Name:{this.props.usrid}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
