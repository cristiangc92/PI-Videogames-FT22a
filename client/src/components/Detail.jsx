import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions";
import "../css/Detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myVideogame = useSelector((state) => state.detail);

  return (
    <div className="Fondo-Detail">
      {myVideogame ? (
        <div className="Conte-General">
          <h1 className="TituloDetail">{myVideogame.name}</h1>
          <img className="ImagenDetail" src={myVideogame.image} alt="" />

          <div className="Conte-Sub">
            <h4 className="tituloElem">⭐ Rating: {myVideogame.rating}</h4>
            <p className="Conte-Rating"></p>

            <h4 className="tituloElem">
              📆 Fecha de Lanzamiento: {myVideogame.released}
            </h4>
            <p className="Conte-Fecha"></p>

            <h4 className="tituloElem">
              🎮 Plataformas: {myVideogame.platforms?.join(",  ")}
            </h4>
            <div className="Conte-Plataform"></div>

            <h4 className="tituloElem">
              🔹 Generos: {myVideogame.genres?.join(",  ")}
            </h4>
            <div className="Conte-Generos"></div>

            <h4 className="tituloElem">📜 Descripción: </h4>
            <p
              className="Descripcion-Detalle"
              dangerouslySetInnerHTML={{ __html: myVideogame.description }}
            />
          </div>
          <Link to="/home">
            <button className="Boton-Volver-Det">◀ Volver</button>
          </Link>
        </div>
      ) : (
        console.log("nada")
      )}
    </div>
  );
}
