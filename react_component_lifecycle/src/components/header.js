import React from 'react';

class Header extends React.Component {
  render() {
    return <h1 style={{color: 'red'}}>{this.props.children}</h1>;
  }
}

export default Header;
