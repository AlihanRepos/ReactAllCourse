import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav , NavItem, NavLink} from "reactstrap";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><Link to="/">Architecht News</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            style={{ justifyContent: "flex-end", marginRight: "100px" }}
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/blogs">Blogs</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
