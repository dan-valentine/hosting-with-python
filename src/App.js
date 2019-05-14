import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/morgan" >MORGAN</Link>
          <Link to="/nort" >NORT</Link>
          <Switch>
            <Route path="/morgan" component={Morgan} />
            <Route path="/nort" component={Nort} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

class Nort extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  componentDidMount() {
    axios.get("/api/nort").then(res => this.setState({ message: res.data }));
  }
  render() {
    return <div className="nort">{this.state.message}</div>;
  }
}
class Morgan extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  componentDidMount() {
    axios.get("/api/morgan").then(res => this.setState({ message: res.data }));
  }
  render() {
    return <div className="morgan">{this.state.message}</div>;
  }
}

export default App;
