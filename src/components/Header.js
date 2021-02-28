import React from "react";
import "./style/Header.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  _openModal = () => {
    this.setState({ isModalOpen: true });
    console.log("OpenModal");
  };
  _closeModal = () => {
    this.setState({ isModalOpen: false });
    console.log("closeMOdal");
  };

  render() {
    return (
      <div className="header">
        <Link to="/" className="header__arrowBefore">
          <i className="fas fa-chevron-left"></i>
        </Link>
        <div className="header__targetAsistant" onClick={this._openModal}>
          <img
            src={this.props.ImageUser}
            alt="Image User"
            className="header__targetAsistant--image"
          />
          <span className="header__targetAsistant--name">
            Asistente {this.props.nameAsistant}
          </span>
        </div>
        {this.state.isModalOpen && (
          <Modal
            ImageUser={this.props.ImageUser}
            nameAsistant={this.props.nameAsistant}
            onClose={this._closeModal}
          />
        )}
      </div>
    );
  }
}

export default Header;
