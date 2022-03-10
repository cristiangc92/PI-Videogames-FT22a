import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../actions";
import "../css/SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    if (!name) {
      return alert("Debe ingresar un nombre");
    } else {
      dispatch(getNameVideogames(name));
      setName("");
      document.getElementById("search").value = "";
    }
  }

  return (
    <div className="searchBar">
      <input
        className="inputS"
        id="search"
        type="text"
        placeholder="Buscar videojuego..."
        onChange={(e) => handleInputChange(e)}
      />
      <button className="botonS" type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR🔎
      </button>
    </div>
  );
}
