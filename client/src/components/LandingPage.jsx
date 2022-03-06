import React from "react";
import { Link } from "react-router-dom";
import "../css/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="fondoL">
      <h1 className="frase">"I'M A GAMER, GAMING IS MY LIFE"</h1>
      <Link to="/home">
        <button className="boton">S T A R T</button>
      </Link>
    </div>
  );
}
