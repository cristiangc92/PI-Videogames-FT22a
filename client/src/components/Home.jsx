import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  filterVideogamesByGenres,
  orderByName,
  filterCreated,
  orderByRating,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import loading from "../css/loading-35.gif";
import "../css/Home.css";

export default function Home() {
  const dispatch = useDispatch(); //Esto es para usar esa constante e ir despachando las acciones. Esto es HOOKS.
  const allVideogames = useSelector((state) => state.videogames); //Me trae del REDUCER el estado videogames(que tiene todos los videojuegos)

  //Defino estados locales entonces tengo que usar useState
  const [, /*orden*/ setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //Lo seteo en 1 porque arranco de la pagina 1.
  const [videogamesPerPage /*setVideogamesPerPage*/] = useState(15); //15 videojuegos por pagina

  const indexOfLastVideogame = currentPage * videogamesPerPage; // 15
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; // 0
  //Videojuegos que estan en la pagina actual
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );
  //Este constante me ayuda al renderizado. En este componente voy a tomar el paginado.
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Voy a traer del estado los videojuegos cuando el componente se monta.
  //Me va llenando el estado cuando se monta el componente.
  //Esto es un componentDidMount
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault(); //Preventivo. Para que no se recargue la pagina. Cada vez que recargamos, los estados de Redux se vuelven a cargar si tenemos un useEffect. Y si dependiamos de algo ya se fue cuando recargar los estados.
    dispatch(getVideogames()); //Resetea por si se buguea.
    setCurrentPage(1);
  }

  function handleFilterGenres(e) {
    dispatch(filterVideogamesByGenres(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  return (
    <div className="fondoH">
      <div className="barraSup">
        <h1 className="titulo">VIDEOJUEGOS APP</h1>
        <button
          className="botonB"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          RECARGAR VIDEOJUEGOS
        </button>
        <Link to="/videogame">
          <button className="botonC">CARGAR VIDEOJUEGO</button>
        </Link>

        <select
          className="selector"
          defaultValue="Generos"
          onChange={(e) => handleFilterGenres(e)}
        >
          <option disabled>Generos</option>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Racing">Racing</option>
          <option value="Massively Multiplayer">Multiplayer</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </select>

        <select
          className="selector"
          defaultValue="Origen"
          onChange={(e) => handleFilterCreated(e)}
        >
          <option disabled>Origen</option>
          <option value="All">All</option>
          <option value="created">Created</option>
          <option value="api">Api</option>
        </select>

        <select
          className="selector"
          defaultValue="Orden"
          onChange={(e) => handleSort(e)}
        >
          <option disabled>Orden</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>

        <select
          className="selector"
          defaultValue="Rating"
          onChange={(e) => handleSort2(e)}
        >
          <option disabled>Rating</option>
          <option value="high">HIGH</option>
          <option value="low">LOW</option>
        </select>
      </div>

      <div>
        <Paginado
          videogamesPerPage={videogamesPerPage}
          allVideogames={allVideogames.length}
          paginado={paginado}
        />

        <SearchBar />

        <div className="card_contenedor">
          {currentVideogames.length > 0 ? (
            currentVideogames.map((e) => {
              return (
                <div key={e.id}>
                  <Link to={"/home/" + e.id}>
                    <Card
                      name={e.name}
                      image={e.image}
                      genres={e.genres}
                      rating={e.rating}
                    />
                  </Link>
                </div>
              );
            })
          ) : (
            <div>
              <img
                src={loading}
                className="loading"
                alt="loading please wait"
              />
              <br />
              <h1 className="loadingT">Loading...</h1>
            </div>
          )}
        </div>
        <Paginado
          videogamesPerPage={videogamesPerPage}
          allVideogames={allVideogames.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
