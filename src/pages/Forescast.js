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
            "Si deseas mi ayuda debes ingresar dos datos, separados por comas, en el campo que se encuentra abajo: 1) Ciudad, 2) Intervalo de tiempo.Para obtener la informacion del pronostico del clima de un dia, se debe tener en cuenta que debes ingresar el numero 7, ya que un dia consta de 7 intervalos de clima, teniendo esto en cuenta debes multiplicar 7 por la cantidad de dias a los que quieres obtener informacion del pronostico del clima.",
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
        paragraph: `Ciudad ingresada: ${dataUser[0]}, Intervalo ingresado: ${dataUser[1]}`,
        data: {
          list: [],
        },
      }),
    });

    this.data = await this.getData(dataUser[0], dataUser[1]);
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
