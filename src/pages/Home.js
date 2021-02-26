import { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import ImageHome from "../docs/ImageHome.svg";
import "./style/Home.css";
import "./style/StylePages.css";

class Home extends Component {
  render() {
    return (
      <div className="container--principal">
        <div className="pageHome__cardAsistant">
          <img
            src={ImageHome}
            alt="Image Asistant"
            className="cardAsistant__image"
          />
          <h1 className="cardAsistant__name">Asistentes Del Clima</h1>
        </div>
        <div className="pageHome__cards">
          <Link to="/today" className="none--style">
            <Card
              title={"Lucia Da Clima Actual"}
              description={
                "Preguntale a Lucia cual es el clima actual de tu ciudad"
              }
            />
          </Link>
          <Link to="/forecast" className="none--style">
            <Card
              title={"Harry Da el pronostico del clima"}
              description={
                "Preguntale a Harry el pronostico del clima de tu ciudad de los proximos 5 dias"
              }
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
