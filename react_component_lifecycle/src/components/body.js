import React from 'react';
import Header from './header';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'John Tan'};
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.name !== this.state.name;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate', nextProps, nextState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  handleMyButton() {
    this.setState({name: this.refs.name.value});
  }

  render() {
    return (
      <div>
        <Header>I am {this.state.name}</Header>
        <input type="text" ref="name"/>
        <button onClick={this.handleMyButton.bind(this)}> ? </button>
      </div>
    );
  }
}

export default Body;
