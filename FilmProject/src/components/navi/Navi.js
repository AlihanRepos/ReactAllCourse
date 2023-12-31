import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import FavoriteSummary from "../favorite/FavoriteSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div style={{margin:"50px"}}>
        <Navbar color="light" light expand="me-5" >
          <NavbarBrand><Link style={{ textDecoration:"none" }} to="/">Movie Maps</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link style={{textDecoration:"none"}} to="/favorite">My Favorite List</Link>
                </NavLink>
              </NavItem>
              <FavoriteSummary />
            </Nav>
          </Collapse>
          </Navbar>
          </div>
      </div>
    );
  }
}
