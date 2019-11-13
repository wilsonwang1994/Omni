import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const {name, price} = this.props;
    return (
      <div className="card">
        <div className="header">{"Movie name: " + name}</div>
        <div className="content">{"Rental price: " + (price ? "$" + price : "No rental")}</div>
      </div>
    );
  }
}

export default Detail;
