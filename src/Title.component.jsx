import { Component } from "react";
export default class Title extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
