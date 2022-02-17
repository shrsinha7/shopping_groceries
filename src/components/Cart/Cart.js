import React, { Component } from "react";
import { Modal, Button,Row,Col } from "react-bootstrap";

class Cart extends Component {
  state = {
    itemCount: 1,
  };

  decrementCount = (id) => {
    if (this.state.itemCount !== 0) {
      this.setState((prevState) => ({ itemCount: prevState.itemCount - 1 }));
    }
  };

  incrementCount = (id) => {
    const cartItem = this.props.cartItems.find((item) => item.id === id);
    console.log(id,cartItem)
    if (this.state.itemCount !== cartItem.stock) {
      this.setState((prevState) => ({ itemCount: prevState.itemCount + 1 }));
    }
  };

  render() {
    return (
      <>
        {this.props.cartItems?.length === 0 ? (
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
        ) : (
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
              <Modal.Title>
                My Cart{" "}
                {this.props.cartItems.length > 1
                  ? `(${this.props.cartItems.length} items)`
                  : `(${this.props.cartItems.length} item)`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ height: "600px" }}
              className="align-items-center overflow-auto"
            >
              {this.props.cartItems?.map((item) => (
                <Row
                  style={{
                    border: "2px solid #eee",
                    boxShadow: "5px 5px 10px #eee",
                    height: '100px'
                  }}
                  key={item.id}
                  className="w-100 p-3 mb-1"
                >
                  <Col xs={2}>
                    <img src={item.imageURL} alt={item.name} width={50} />
                  </Col>
                  <Col xs={10}>
                    <h6>{item.name}</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => this.decrementCount(item.id)}
                        >
                          -
         
                        </Button>{" "}
                        {this.state.itemCount}{" "}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => this.incrementCount(item.id)}
                        >
                          +
                        </Button>{" "}
                        X Rs. {item.price}
                      </div>
                      <span>Rs.{item.price * this.state.itemCount}</span>
                    </div>
                  </Col>
                </Row>
              ))}
              <div className="w-100 text-center p-3">
                <img
                  src="static/images/lowest-price.png"
                  alt="You won't find it cheaper anywhere"
                  width={100}
                />{" "}
                You won't find it cheaper anywhere
              </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <Button
                variant="danger"
                className="w-100 d-flex justify-content-between"
                onClick={this.props.handleCloseCart}
              >
                Proceed to Checkout <span>Rs.{this.props.CartItemsPrice * this.state.itemCount}</span>
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default Cart;
