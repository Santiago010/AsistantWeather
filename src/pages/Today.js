import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style/Today.css";
import Chat from "../components/Chat";
import ImageAsistant from "../docs/ImageAsistant.svg";
import ImageUser from "../docs/ImageUser.svg";
import ImageWeather from "../docs/ImageWeather.svg";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [
        {
          image: ImageAsistant,
          paragraph:
            "¡Hola !Bienvenido, soy un asistente virtual que te puede ayudar a dar información del clima de hoy.",
        },
      ],
    };
    this.time = undefined;
    this.instantsFormData = undefined;
    this.indicatorInfo = true;
    this.data = null;
  }

  renderInfo = (options) => {
    const optionFull = options.toLowerCase();
    if (optionFull === "a" || optionFull === "b" || optionFull === "c") {
      switch (optionFull) {
        case "a":
          this.setState({
            message: [].concat(this.state.message, {
              image: `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`,
              paragraph: `Humedad: ${this.data.main.humidity}
              \nPresion: ${this.data.main.pressure} \n Temperatura: ${this.data.main.temp}`,
            }),
          });
          break;
        case "b":
          this.setState({
            message: [].concat(this.state.message, {
              image: `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`,
              paragraph: `Descripcion: ${this.data.weather[0].description}
              \Principal: ${this.data.weather[0].main}`,
            }),
          });
          break;
        case "c":
          this.setState({
            message: [].concat(this.state.message, {
              image: `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`,
              paragraph: `Humedad: ${this.data.main.humidity}
              \nPresion: ${this.data.main.pressure} \n Temperatura: ${this.data.main.temp}\nDescripcion: ${this.data.weather[0].description}
              \Principal: ${this.data.weather[0].main}`,
            }),
          });
        default:
          break;
      }
      console.log(this.data);
    } else {
      return;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.instantsFormData = new FormData(e.target);

    this.setState({
      message: [].concat(this.state.message, {
        image: "",
        paragraph: this.instantsFormData.get("data"),
      }),
    });

    this.renderInfo(this.instantsFormData.get("data"));

    if (this.indicatorInfo) {
      this.data = await this.getData(this.instantsFormData.get("data"));
      console.log(this.data);
      if (this.data.cod === "404") {
        console.log("Ciudad no encontrada");
        this.setState({
          message: [].concat(this.state.message, {
            image: "",
            paragraph: this.data.message,
          }),
        });
      } else {
        this.indicatorInfo = false;
        this.setState({
          message: [].concat(this.state.message, {
            image: "",
            paragraph:
              "¡Muy bien!, ahora dime que tipo de informacion quieres ver, Ingresa a: si quieres ver informacion principal, Ingresa b: si quieres ver informacion exclusivamente del clima y Ingresa c: si quieres ver los dos tipos de informacion",
          }),
        });
      }
    }
  };

  getData = async (country) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=3d060094da375105a7dd696078c59e0c&lang=es`
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };
  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({
        message: [].concat(this.state.message, {
          image: ImageWeather,
          paragraph:
            "Si deseas mi ayuda debes ingresar tu ciudad en el campo que se encuentra abajo",
        }),
      });
    }, 1500);
    console.log(this.state.message);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div className="today">
        <div className="header">
          <Link to="/" className="header__arrowBefore">
            <i className="fas fa-chevron-left"></i>
          </Link>
          <div className="header__targetAsistant">
            <img
              src={ImageUser}
              alt="Image User"
              className="header__targetAsistant--image"
            />
            <span className="header__targetAsistant--name">Name Asistant</span>
          </div>
        </div>
        <Chat messages={this.state.message} />
        <Fragment>
          <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
            <input
              className="form__inputText"
              type="text"
              name="data"
              placeholder="Datos"
              required
            />
            <input className="form__inputSubmit" type="submit" value=">" />
          </form>
        </Fragment>
      </div>
    );
  }
}

export default Today;
