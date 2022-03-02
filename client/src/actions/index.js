import axios from "axios";

//GET PARA TRAER TODOS LOS VIDEOJUEGOS. Aqui es donde se conecta el Back con el Front
export function getVideogames() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: json.data,
    });
  };
}
