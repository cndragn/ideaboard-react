import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap';
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <h1>Idea Board</h1>
          </header>
          <IdeasContainer />
        </div>
      </Container>
    );
  }
}

export default App
