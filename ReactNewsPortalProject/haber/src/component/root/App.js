import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "../navi/Header";
import Dashboard from "./Dashboard";
import BlogDetail from "../detail/BlogDetail";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
        </Routes>
      </Container>
    );
  }
}