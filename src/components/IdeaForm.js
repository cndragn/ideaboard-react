import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class IdeaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.idea.title,
            body: this.props.idea.body
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        const idea = {title: this.state.title, body: this.state.body}
        if (e.key === 'Enter') {
            console.log('do validate');
            e.preventDefault()
            e.stopPropagation()
            this.props.resetNotification()
            this.setState({[e.target.name]: e.target.value})
            axios.put(
                `https://idea-api.herokuapp.com/api/v1/ideas/${this.props.idea.id}`,
                {idea: idea}
            )
            .then(response => {
                console.log(response)
                this.props.updateIdea(response.data)
            })
        }  
    }

    handleBlur = () => {
        const idea = {title: this.state.title, body: this.state.body}
        
        console.log("Yup");
        axios.put(
            `https://idea-api.herokuapp.com/api/v1/ideas/${this.props.idea.id}`,
            {idea: idea}
        )
        .then(response => {
            console.log(response)
            this.props.updateIdea(response.data)
        }) 
        .catch(error => console.log(error))
    }

    render () {
        return (
                <Card>
                    <CardImg />
                    <CardBody>
                        <form onBlur={this.handleBlur}>
                        <CardTitle>
                            <input className="input" type="text" name = "title" placeholder="Enter a Title" value ={this.state.title} onKeyPress={this.handleSubmit} onChange={this.handleInput} ref={this.props.titleRef} />
                        </CardTitle>
                        <CardText>
                            <textarea className="input" name="body" placeholder="Describe your idea" value = {this.state.body} onKeyPress={this.handleSubmit} onChange={this.handleInput}></textarea>
                        </CardText>
                        </form>
                    </CardBody>
                </Card>
        );
    }
}

export default IdeaForm