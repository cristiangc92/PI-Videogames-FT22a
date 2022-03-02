import React from "react";
import { useEffect /*useState*/ } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch(); //Esto es para usar esa constante e ir despachando las acciones. Esto es HOOKS.
  const allVideogames = useSelector((state) => state.videogames);

  //Voy a traer del estado los videojuegos cuando el componente se monta.
  useEffect(() => {
    //Esto es un componentDidMount
    dispatch(getVideogames());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault(); //Preventivo. Para que no se recargue la pagina. Cada vez que recargamos, los estados
    //de Redux se vuelven a cargar si tenemos un useEffect. Y si dependiamos de algo ya
    //se fue cuando recargar los estados.
    dispatch(getVideogames()); //Resetea por si se buguea.
  }

  return (
    <div>
      <Link to="/videogame">Crear videojuego</Link>
      <h1>V I D E O J U E G O S</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar todos los videojuegos
      </button>
      <div>
        <select>
          <option value="All">ALL</option>
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
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Family">Family</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </select>

        <select>
          <option value="All">ALL</option>
          <option value="created">Created</option>
          <option value="api">Api</option>
        </select>

        <select>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>

        <select>
          <option value="high">HIGH</option>
          <option value="low">LOW</option>
        </select>

        {allVideogames?.map((e) => {
          return (
            <div key={e.id}>
              <Link to={"/home/" + e.id}>
                <Card
                  name={e.name}
                  image={e.image}
                  genres={e.genres.map((e) => e).join(", ")}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
