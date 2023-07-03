import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import backgroundImage from "../assets/cabecero.jpg";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "80%",
    height: "100%",
  };

  return (
    <header className="text-center container-fluid" style={headerStyle}>
      <div className="contenedor-header">
        <h1 className="titulo">
          <Link to="/" className="nav-link">
            Cosas de gatos
          </Link>
        </h1>
      </div>
    </header>
  );
};

export { Header };
