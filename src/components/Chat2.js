import React from "react";
import "./style/Chat.css";

class Chat2 extends React.Component {
  render() {
    return (
      <ul className="chat">
        {this.props.message.map((message, index) => {
          return (
            <li key={index} className="chat__card--asistant">
              <img width="100" src={message.image} />
              <p>{message.paragraph}</p>
              <ul>
                {message.data.list.map((data, index2) => {
                  return (
                    <li key={index2}>

                      <p>
                        <span className="type--info underline">
                          Fecha Y Hora:{" "}
                        </span>
                        {data.dt_txt}
                      </p>
                      <p>
                        <span className="type--info">Humedad: </span>
                        {data.main.humidity}
                      </p>{" "}
                      <p>
                        <span className="type--info">Pression: </span>
                        {data.main.pressure}
                      </p>
                      <img
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      />
                      <p>
                        <span className="type--info">Descripcion: </span>
                        {data.weather[0].description}
                      </p>
                      <div className="line-style" />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Chat2;
