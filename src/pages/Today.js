import { Component } from "react";
import { Link } from "react-router-dom";
import "./style/StylePages.css";
import Chat from "../components/Chat";
import ImageAsistant from "../docs/ImageAsistant.svg";
import ImageUser from "../docs/ImageUser.svg";
import ImageWeather from "../docs/ImageWeather.svg";
import Header from "../components/Header";
import Form from "../components/Form";
import { key } from "../docs/ApiKey";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "",
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

  handleChange = (e) => {
    this.setState({ valueInput: e.target.value });
  };

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
    console.log(this.instantsFormData.get("data"));

    this.setState({
      message: [].concat(this.state.message, {
        image: "",
        paragraph: `Ciudad ingresada: ${this.instantsFormData.get("data")}`,
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

  getData = (country) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}&lang=es`
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
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div className="container--principal">
        <Header ImageUser={ImageUser} nameAsistant={"Lucia"} />
        <Chat messages={this.state.message} />
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
          valueInput={this.state.valueInput}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Today;
