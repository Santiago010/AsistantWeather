import React from "react";
import Header from "../components/Header";
import "./style/StylePages.css";
import ImageUser from "../docs/ImageUser2.svg";
import Chat from "../components/Chat2";
import Form from "../components/Form";
import ImageAsistant from "../docs/ImageAsistant.svg";
import { key } from "../docs/ApiKey";
import ImageWeather from "../docs/ImageWeather.svg";

class Forescast5Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [
        {
          image: ImageAsistant,
          paragraph:
            "¡Hola !Bienvenido, soy un asistente virtual que te puede ayudar dando un pronostico del clima hasta de 5 dias.",
          data: {
            list: [],
          },
        },
      ],
    };
    this.time = undefined;
    this.instantsFormData = undefined;
    this.indicatorInfo = true;
    this.data = null;
  }

  componentDidMount() {
    this.time = setTimeout(() => {
      this.setState({
        message: [].concat(this.state.message, {
          image: ImageWeather,
          paragraph:
            "Si deseas mi ayuda debes ingresar dos datos separados por comas, en el campo que se encuentra abajo: 1) Ciudad, 2) la cantidad de días a los cuales quieres ver el pronóstico.",
          data: {
            list: [],
          },
        }),
      });
    }, 1500);
    console.log(this.state);
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.instantsFormData = new FormData(e.target);
    const dataUser = this.instantsFormData.get("data").split(",");
    console.log(dataUser);
    this.setState({
      message: [].concat(this.state.message, {
        image: "",
        paragraph: `Ciudad ingresada: ${dataUser[0]}, Cantidad de dias ingresados ${dataUser[1]}`,
        data: {
          list: [],
        },
      }),
    });

    this.data = await this.getData(dataUser[0], dataUser[1] * 7);
    if (this.data.cod === "404") {
      console.log("Ciudad no encontrada");
      this.setState({
        message: [].concat(this.state.message, {
          image: "",
          paragraph: this.data.message,
          data: {
            list: [],
          },
        }),
      });
    } else {
      this.setState({
        message: [].concat(this.state.message, {
          image: "",
          paragraph: "Tu pronostico es: ",
          data: this.data,
        }),
      });
      console.log(this.state);
    }
  };

  getData(country, intervalTime) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=${intervalTime}&appid=${key}&lang=es`
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((Error) => reject(Error));
    });
  }
  render() {
    return (
      <div className="container--principal">
        <Header ImageUser={ImageUser} nameAsistant={"Harry"} />
        <Chat message={this.state.message} />
        <Form onSubmit={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}

export default Forescast5Days;
