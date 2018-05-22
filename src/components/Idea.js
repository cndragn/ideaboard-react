import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Idea extends Component {
    handleClick = (event) => {
        this.props.onClick(this.props.idea.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.idea.id)
    }

    render() {
        return (
                <Card>
                    <CardImg />
                    <CardBody>
                        <CardTitle>
                            <span onClick={this.handleClick}>{this.props.idea.title}</span>
                            <span className="deleteButton" onClick={this.handleDelete} >X</span>
                        </CardTitle>
                        <CardText>
                            <span onClick={this.handleClick}>{this.props.idea.body}</span>
                        </CardText>
                        
                    </CardBody>
                </Card>
        )
    }
}
    

export default Idea