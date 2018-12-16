import React, { Component } from 'react';
import logo from './logo.svg';
import Child from './Child';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hentry',
      showMe: false,
    };
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  onChangeName = () => {
    this.setState({
      name: 'martin',
    }, () => {
      console.log(this.state.name);
    });
  }

  onShowMe = () => {
    this.setState({
      showMe: !this.state.showMe,
    })
  };

  render() {
    return (
      <div className="App">
        Trello clone
        <button onClick={this.onChangeName}>Change Name</button>
        <button onClick={this.onShowMe}>Show Me</button>
      
        {this.state.showMe && <Child name={this.state.name}/>}
      </div>
    );
  }
}

export default App;
