import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const {name, price, description} = this.props;
    return (
      <div>
        <div>
          <div>{"Movie name: "}</div>
          <div>{name}</div>
        </div>
        <br />
        <div>
          <div>{"Rental price: "}</div>
          <div>{(price ? "$" + price : "No rental")}</div>
        </div>
        <br />
        <div>
          <div>{"Description: "}</div>
          <div>{description ? description : "No short description"}</div>
        </div>
      </div>
    );
  }
}

export default Detail;
