import { Component } from "react";
import { Link } from "react-router-dom";
import "./style/Card.css";

class Card extends Component {
  render() {
    return (
      <Link className="pageHome__card" to="/today">
        <h2 className="card__title">Harry Da Clima Actual</h2>
        <span className="card__description">
          Preguntale a Harry cual es el clima actual de tu ciudad
        </span>
      </Link>
    );
  }
}

export default Card;
