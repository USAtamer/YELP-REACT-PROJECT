import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

export default class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.Businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}
