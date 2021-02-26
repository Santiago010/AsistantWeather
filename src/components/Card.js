import { Component } from "react";
// import { Link } from "react-router-dom";
import "./style/Card.css";

class Card extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="pageHome__card">
        <h2 className="card__title">{title}</h2>
        <span className="card__description">{description}</span>
      </div>
    );
  }
}

export default Card;
