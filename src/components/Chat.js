import React from "react";
import "./style/Chat.css";

class Chat extends React.Component {
  render() {
    return (
      <ul className="chat">
        {this.props.messages.map((message, index) => {
          return (
            <li key={index} className="chat__card--asistant">
              <img width="100" src={message.image} />
              <p>{message.paragraph}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Chat;
