import React, { Component } from 'react'
import {Card, CardBody, CardTitle,CardImg, CardText, FormGroup, Label, Input} from "reactstrap"
import { connect } from "react-redux";
class BlogDetail extends Component {
    render() {
        return (
            <div>
                <Card
                    style={{
                        width: '%100'
                    }}
                >
                    <CardImg
                        alt="Card"
                        src={this.props.blog.image}
                        className='center'
                        width="%100" 
                        height="300"
                    />
                    <CardBody flush>
                        <CardTitle tag="h5">
                            {this.props.blog.title}
                        </CardTitle>
                        <CardText>
                            {this.props.blog.content}
                        </CardText>
                    </CardBody>
                    <FormGroup>
                        <Label for="exampleText">
                            Yorum Yap
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                    </FormGroup>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    blog: state.detailsReducer
  };
}


export default connect(mapStateToProps)(BlogDetail);
