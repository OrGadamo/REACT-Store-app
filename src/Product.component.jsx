import { Component } from "react";
import Title from "./Title.component";
import DisplayImg from "./DisplayImg";
export default class Product extends Component {
  render() {
    return (
      <div>
        <Title name="Tree" />
        <DisplayImg src="images/pic1.jpg" />
      </div>
    );
  }
}
