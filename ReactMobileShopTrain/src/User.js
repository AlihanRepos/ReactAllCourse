import React, { Component } from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg } from 'reactstrap'
export default class User extends Component {
    render() {
      const { imageData } = this.props;
       
      return (
       
        <div>
          <h2>About Profile</h2>
            <Card>
            {imageData && <CardImg top width="100%" src={imageData} alt="Profile Photo" />}
        <CardBody>
          <CardTitle>Email: { this.props.userdata.email}</CardTitle>
          <CardSubtitle> Password: {this.props.userdata.password} </CardSubtitle>
          <CardText>Text: { this.props.userdata.text} </CardText>
          <CardText>Select: { this.props.userdata.select} </CardText>
          <CardText>SelectMulti: { this.props.userdata.selectMulti} </CardText>
          
          
        </CardBody>
          </Card>  
        
      </div>
    )
  }
}
