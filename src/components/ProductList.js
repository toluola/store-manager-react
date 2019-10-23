import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return <h1>{hello}</h1>
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
