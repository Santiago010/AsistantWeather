import { Component } from "react";
import Card from "../components/Card";
import ImageHome from "../docs/ImageHome.svg";
import "./style/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="pageHome">
        <div className="pageHome__cardAsistant">
          <img
            src={ImageHome}
            alt="Image Asistant"
            className="cardAsistant__image"
          />
          <h1 className="cardAsistant__name">Asistant Harry</h1>
        </div>
        <div className="pageHome__cards">
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
