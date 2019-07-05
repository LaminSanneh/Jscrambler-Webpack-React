import React, { Component } from "react";
import bicycle from "@/images/bike.jpg";

export class Main extends Component {
  render() {
    return (
      <div>
        <p className="hello-text">Hello from react!</p>
        <p><img src={bicycle} alt="Image name"/></p>
      </div>
    )
  }
}

export default Main