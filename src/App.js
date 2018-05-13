import React, { Component } from 'react'
import './App.css'
import { Button } from 'reactstrap';
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Idea Board</h1>
          <Button color="primary">primary</Button>{' '}
        </header>
        <IdeasContainer />
      </div>
    );
  }
}

export default App
