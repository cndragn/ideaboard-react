import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'
import IdeaForm from './IdeaForm'
import update from 'immutability-helper'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class IdeasContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ideas: [],
            editingIdeaId: null,
            notification: ' '
        }
    }

    componentDidMount() {
        axios.get('https://idea-api.herokuapp.com/api/v1/ideas.json')
        .then(response => {
            this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
    }

    addNewIdea = () => {
        axios.post('https://idea-api.herokuapp.com/api/v1/ideas', {idea: {title: '', body: ''}})
        .then(response => {
            const ideas = update(this.state.ideas, { $splice: [[0, 0, response.data]]})
            this.setState({ideas: ideas, editingIdeaId: response.data.id})
        })
        .catch(error => console.log(error))
    }

    updateIdea = (idea) => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
        const ideas = update(this.state.ideas, {[ideaIndex]: {$set: idea}})
        this.setState({ideas: ideas, notification: 'All changes saved'})
    }

    resetNotification = () => {this.setState({notification: ''})}

    enableEditing = (id) => {
        this.setState({editingIdeaId: id}, () => {this.title.focus() })
    }

    deleteIdea = (id) => {
        axios.delete(`https://idea-api.herokuapp.com/api/v1/ideas/${id}`)
        .then(response => {
            const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
            const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]})
            this.setState({ideas: ideas})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <p>
                Create a new card by selecting New Idea then entering a title and description.<br/>
                Click directly on the title or description to edit your idea. <br/>
                Delete an idea by hovering over it or clicking the card, then click the red X.
                </p>
                <div className="nav-wrap">
                    <div>
                    {/* <Button color="primary">primary</Button>{' '} */}
                        <Button color="primary" className="newIdeaButton" onClick={this.addNewIdea}>
                            New Idea
                        </Button>

                       
                    </div>
                    <div>
                        <Link to="/">Return to Home</Link>
                    </div>
                </div>
                <div className="notification">
                            {this.state.notification}
                        </div>
                <div className="card-columns">
                    {this.state.ideas.map((idea) => {
                        if(this.state.editingIdeaId === idea.id) {
                            return(<IdeaForm idea={idea} key={idea.id} updateIdea={this.updateIdea} 
                                resetNotification={this.resetNotification} titleRef={input => this.title = input} />)
                        } else {
                            return(<Idea idea={idea} key={idea.id} onClick={this.enableEditing} onDelete={this.deleteIdea} />)
                        }
                    })}
                </div>
            </div>  
        );
    }
}

export default IdeasContainer
