import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { products } from "../DB/ProductList";
import ProductDetail from "../Components/ProductDetail";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      isProDetail: false,
      proDetail: {},
    };
  }

  handleOnClick = (product) => {
    this.setState({
      isProDetail: !this.state.isProDetail,
      proDetail: product,
    });
  };

  onHandleBackClick = () => {
    this.setState({
      isProDetail: false,
    });
  };

  render() {
    const { products, proDetail } = this.state;

    return (
      <>
        {this.state.isProDetail ? (
          <ProductDetail
            product={proDetail}
            onHandleBack={this.onHandleBackClick}
          />
        ) : (
          <div className="row m-0">
            <div className="col-2">
              <div className="list-group">
                <h2 className="list-group-item list-group-item-action active">
                  Các loại sản phẩm
                </h2>
              </div>
            </div>
            <div className="col-10">
              <div className="row m-0">
                {products.map((p) => (
                  <div className="col-3 p-2" key={p.ID}>
                    <div className="card-item">
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={p.Images}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">{p.Name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {p.Price}
                          </CardSubtitle>
                          <Button onClick={() => this.handleOnClick(p)}>
                            Mua
                          </Button>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Product;
