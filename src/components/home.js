import React, { Component } from "react";

class Home extends Component {
  render() {
    return <button onClick={this.props.onClick}>
            Click Me!
            </button>;
  }
}

export default Home;