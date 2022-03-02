import React from "react";
import { Link } from "react-router-dom";
import "../css/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="fondo">
      <h1 className="frase">
        "I'M A GAMER,
        <br />
        GAMING IS MY LIFE"
      </h1>
      <Link to="/home">
        <button className="boton">S T A R T</button>
      </Link>
    </div>
  );
}
