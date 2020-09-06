import React, { Component } from 'react';
import { Table } from "reactstrap"
import {Button } from "reactstrap"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"

class CartDetail extends Component {

  removeFromCart = (product) => {
    this.props.removeFromCart(product);
    alertify.error(product.props + " deleted from cart.")
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>        
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="success" onClick={()=>this.removeFromCart(cartItem.product)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cart: state.cartReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);