import React, { Component } from 'react'
import { Col, Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Idea extends Component {
    handleClick = () => {
        this.props.onClick(this.props.idea.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.idea.id)
    }

    render() {
        return (
            <Col md = "6" lg="4">
                <Card>
                    <CardImg />
                    <CardBody>
                        <span className="deleteButton" onClick={this.handleDelete} >x</span>
                        <CardTitle>
                            <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
                        </CardTitle>
                        <CardText>
                            <p onClick={this.handleClick}>{this.props.idea.body}</p>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
    

export default Idea