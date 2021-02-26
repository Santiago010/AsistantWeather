import React from "react";
import "./style/Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="header__arrowBefore">
        <i className="fas fa-chevron-left"></i>
      </Link>
      <div className="header__targetAsistant">
        <img
          src={props.ImageUser}
          alt="Image User"
          className="header__targetAsistant--image"
        />
        <span className="header__targetAsistant--name">
          Asistente {props.nameAsistant}
        </span>
      </div>
    </div>
  );
};

export default Header;
