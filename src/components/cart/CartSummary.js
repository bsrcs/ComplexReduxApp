import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Badge,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { addToCart } from "../../redux/actions/cartActions"
import * as cartActions from "../../redux/actions/cartActions"
import { bindActionCreators } from "redux"

class CartSummary extends Component {
  // sepet bosken burasi calisacak.
  // spagetti kod yazmak yerien bu yontemi seciyorum.
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Your cart is empty.</NavLink>
      </NavItem>
    )
  }
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>Go To Cart</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  render() {
    // sepette eleman varsa elemani yoksa sepet bosturu goster.
    // bu sekilde kodu iki farkli fonksiyona bolme islemine surdurulebilir programlama denilir.
    return (
      <>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)
