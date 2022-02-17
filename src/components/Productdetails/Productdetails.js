import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import './Productdetails.css'

class Productdetails extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          {this.props.productList.map((data) => (
            <div className="col-md-3" style={{padding:'10px'}} key={data.id}>
              <Card key={data.id} className="productList">
                <Card.Body>
                  <h5 className="categoryName">
                    <b>{data.name}</b>
                  </h5>
                  <div className="product-card">
                    <img
                      src={data.imageURL}
                      alt={data.sku}
                      loading="lazy"
                      width="175"
                      height="175"
                    ></img><br/>
                    <div className="bg-light prod-div">
                        <span className="prod-description">{data.description}</span>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white no-border" >
                    <div className="prod-purchase">
                      <span>MRP Rs. {data.price}</span>&nbsp;
                      <Button
                      className="btn-class"
                        size='lg'
                        onClick={()=>this.props.addToCart(data.id)}
                      >
                        Buy Now
                      </Button>
                    </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Productdetails;
