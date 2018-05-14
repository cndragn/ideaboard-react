import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap';
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Idea Board</h1>
          <h2>Get Inspired</h2>
        </header>
        <Container>
          <p>
            Create a new card by selecting New Idea then entering a title and description.<br/>
            Click directly on the title or description to edit your idea. <br/>
            Delete an idea by hovering over it or clicking the card, then click the red X.
          </p>
          <IdeasContainer />
        </Container>
      </div>
    );
  }
}

export default App
