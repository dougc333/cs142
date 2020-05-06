import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      return <header>This is a header tag not head tag. <img src="jack.jpg"></img></header>;
  }
}

export default Header;

