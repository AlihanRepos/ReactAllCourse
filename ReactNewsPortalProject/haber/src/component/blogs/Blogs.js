import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as blogActions from "../../redux/actions/blogActions";
import * as detailsActions from"../../redux/actions/detailsActions";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Button, Col , CardGroup} from "reactstrap";
import { Link } from "react-router-dom";

class Blogs extends Component {
  componentDidMount() {
    this.props.actions.getBlog();
  }
  goToDetails(blogId){
    this.props.actions.goToDetails(blogId);
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">News</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <CardGroup>
        {this.props.blogs.map((blog) => (
          <Col xs="9">
            <Card
              style={{ marginLeft: "10px", marginRight: "10px" }}
              key={blog.source.id}
            >
              <CardImg
                top
                width="100%"
                src={blog.image}
                alt={blog.title}
              />
              <CardBody>
                <CardTitle>{blog.title}</CardTitle>
                <CardText>{blog.description}</CardText>
                <Button onClick={() => this.goToDetails(blog.source.id) }  color="info">
                 <Link to="/blogdetail">Read more..</Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
        </CardGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    blogs: state.blogReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBlog: bindActionCreators(blogActions.getBlog, dispatch),
      goToDetails: bindActionCreators(detailsActions.getDetails, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
