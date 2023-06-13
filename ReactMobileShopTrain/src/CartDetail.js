import React, { Component } from "react";
import { Table } from "reactstrap";

export default class cart extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th> Category id</th>
              <th> Product Name</th>
              <th>Quantity</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((c, index) => (
              <tr key={c.product.id}>
                <td>{index + 1}</td>
                <td>{c.product.categoryId}</td>
                <td>{c.product.productName}</td>
                <td>{c.quantity}</td>
                <td>
                  <button onClick={() => this.props.removeToCart(c.product)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
