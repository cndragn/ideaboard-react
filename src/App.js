import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Home from './components/Home';
import IdeasContainer from './components/IdeasContainer'

import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Idea Board</h1>
          <h2>Get Inspired</h2>
        </header>
        <Container>
          <BrowserRouter>
          <div>
            <ul className="header">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/demo">Demo</Link></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/demo" component={IdeasContainer}/>             
            </div>
         </div>
        </BrowserRouter>
        </Container>
        
      </div>
    );
  }
}

export default App
