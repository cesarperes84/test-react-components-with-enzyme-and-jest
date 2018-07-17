import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

const Test = () => <div>Testing</div>;

const Title = ({text}) => <div>{text}</div>;

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Title text="Some title" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Test />
      </div>
    );
  }
}

export default App;
