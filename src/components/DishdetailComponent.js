import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderDish = (dish) => {
        if (dish !== null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComments = (comments) => {
        if (comments === null) {
            return (<div></div>)
        } else {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div className="list-unstyled">
                        {comments.map(comment => {
                            return (
                                <li key={comment.id}>
                                    {comment.comment}
                                    <br />
                                    -- {comment.author + " " + comment.date}
                                </li>
                            )
                        })}

                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish === null ? null : this.props.dish.comments)}
            </div>
        )
    }
}

export default DishDetail;