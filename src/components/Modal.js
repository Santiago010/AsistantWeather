import React from "react";
import ReactDOM from "react-dom";
import "./style/Modal.css";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__containerImage">
          <img
            className="containerImage__img"
            src={this.props.ImageUser}
            alt="Image Asistant"
          />
        </div>

        <h2>¡Hola! soy el Asistente {this.props.nameAsistant}</h2>
        <span>
          Fui desarrollado por Santigo Ortiz, un desarrollador Front-end
          apasionado y dedicado al mundo de la informática, esta app es solo una
          pequeña muestra de el gran trabajo y desempeño que él le entrega a sus
          proyectos, por cierto no olvides visitas su repositorio de GitHub,
          puedes encontrarlo como Santiago010
        </span>
        <button className="modal__btn" onClick={this.props.onClose}>
          Close
        </button>
      </div>,
      document.getElementById("modal")
    );
  }
}
export default Modal;
