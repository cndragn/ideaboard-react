import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap';
import addidea from '../images/add-idea.gif';
import editidea from '../images/edit-idea.gif';
import deleteidea from '../images/delete-idea.gif';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ideas: [],
            editingIdeaId: null,
            notification: ''
        }
    }

    componentDidMount() {
        axios.get('https://idea-api.herokuapp.com/api/v1/ideas.json')
        .then(response => {
            this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
    }


    render() {
        return (
            <div> 
                <div className="title text-center">
                    <h1>Collect your ideas in one place</h1>
                    <h2>Create an idea board to quickly create, edit and delete ideas</h2>  
                    <Button className="btn btn-success"><Link to="/demo">Try The Demo</Link></Button>
                </div>             
                <div className="demoIdeas">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Add New Ideas</h1>
                            <p className="card-text">Create a new card by selecting New Idea then entering a title and description.</p>
                        </div>
                        <img className="card-img-top" src={addidea} alt="Add Idea Demo"/>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Edit Your Idea</h1>
                            <p className="card-text">Click directly on the title or description to edit your idea.</p>
                        </div>
                        <img className="card-img-top" src={editidea} alt="Edit Idea Demo"/>                        
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Delete Your Idea</h1>
                            <p className="card-text">Delete an idea by hovering over it or clicking the card, then click the red X.</p>
                        </div>
                        <img className="card-img-top" src={deleteidea} alt="Delete Idea Demo"/>                        
                    </div>
                    <Button className="btn btn-success"><Link to="/demo">Try The Demo</Link></Button>
                </div>
                
            </div>  
        );
    }
}

export default Home
