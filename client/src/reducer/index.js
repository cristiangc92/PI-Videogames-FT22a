//Necesito un estado inicial
const initialState = {
  videogames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload, //En mi estado videogames que al principio es un estado vacio
        //le mando todo lo que traiga la accion "GET_VIDEOGAMES"
      };
    default:
      return state;
  }
}

export default rootReducer;
