import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Cart extends Component {
  state = {
    itemCount: 1,
  };

  render() {
    return (
          <Modal
            show={this.props.showCart}
            onHide={this.props.handleCloseCart}
            centered
            size="lg"
          >
            <Modal.Header
              className="bg-dark text-light"
              closeButton
              closeVariant="white"
            >
              <Modal.Title>My Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ height: "600px" }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h3>No items in your cart</h3>
              <p>Your favourite items are just a click away</p>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <Button
                variant="danger"
                className="w-100"
                onClick={this.props.handleCloseCart}
              >
                Start Shopping
              </Button>
            </Modal.Footer>
          </Modal>
    );
  }
}

export default Cart;
