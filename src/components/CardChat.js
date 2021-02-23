import { Component } from "react";
import "./style/CardChat.css";

class CardChat extends Component {
  render() {
    return (
      <li key={this.props.id} className="chat__card--asistant">
        <img width="100" src={this.props.image} />
        <p>{this.props.paragraph}</p>
      </li>
    );
  }
}

export default CardChat;
