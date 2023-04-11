import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, phone, email} = this.props.infoProp;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{phone}</h2>
        <h2>{email}</h2>
      </div>
    )
  }

}


export default GeneralInfo;