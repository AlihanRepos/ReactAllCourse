import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          textDecoration: "none",
          color: "black",
          border: "1px solid black",
          borderRadius: " 10px",
          margin: "20px",
          padding: "20px",
        }}>
        <h3>
          Mobile Shop<span class="material-symbols-outlined">smartphone</span>
        </h3>

        <Nav>
          <NavItem>
            <NavLink
              className="btn "
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid black",
                borderRadius: "3px",
                marginRight: "20px",
                padding: "12px",
              }}
              href="#">
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn "
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid black",
                borderRadius: "3px",
                marginRight: "20px",
                padding: "12px",
              }}
              href="#">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/contact">
                Add Profile
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn "
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid black",
                borderRadius: "3px",
                marginRight: "20px",
                padding: "12px",
              }}
              href="#">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/cart">
                Cart Detail
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn "
              style={{
                textDecoration: "none",
                color: "white",
                border: "1px solid black",
                borderRadius: "3px",
                marginRight: "20px",
                padding: "12px",
              }}
              href="#">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/user">
                Profile
              </Link>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              className="btn "
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid black",
                borderRadius: "3px",
              }}
              nav
              caret>
              <span class="material-symbols-outlined">shopping_cart</span>
              {this.props.data.length}
            </DropdownToggle>
            <DropdownMenu right>
              {this.props.data.map((crt) => (
                <DropdownItem key={crt.product.id}>
                  {crt.product.productName} ...... {crt.quantity}
                  <span
                    onClick={() => this.props.removeToCart(crt.product)}
                    className="badge badge-danger"
                    style={{ marginRight: "10px", backgroundColor: "red" }}>
                    Delete
                  </span>
                </DropdownItem>
              ))}
              <DropdownItem divider />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    );
  }
}
