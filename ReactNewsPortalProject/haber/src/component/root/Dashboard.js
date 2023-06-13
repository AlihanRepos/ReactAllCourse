import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Blogs from "../blogs/Blogs";
import Categories from "../categories/Categories";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <Categories />
          </Col>
          <Col xs="9">
            <Blogs />
          </Col>
        </Row>
      </div>
    );
  }
}
