import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <Nav className="navbar-container">
            <div className="app-header">
              <div className="navbar-header left">
                <Link to="/" className="app-logo" itemProp="url">
                  <img
                    src="static/images/logo.png"
                    srcSet="/static/images/logo_2x.png 1.5x, /static/images/logo_2x.png 2x"
                    alt="sabkaBazar_logo"
                    width="130"
                    height="60"
                    loading="lazy"
                  ></img>
                </Link>

                <Link to="/" itemProp="url">
                  Home
                </Link>
                <Link to="/product" itemProp="url">
                  Product
                </Link>
              </div>
              <div className="navbar-header right">
                <ul className="app-auth">
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signUp">Register</Link>
                  </li>
                </ul>
                <button
                  className="cart-container"
                  onClick={() => this.props.handleShowCart()}
                >
                  <img
                    src="/static/images/cart.svg"
                    alt="cart"
                    width="30"
                    height="18"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </Nav>
        </header>
      </div>
    );
  }
}

export default Header;
