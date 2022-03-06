//Necesito un estado inicial
const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload, //En mi estado videogames que al principio es un estado vacio
        //le mando todo lo que traiga la accion "GET_VIDEOGAMES"
        allVideogames: action.payload,
      };

    case "FILTER_BY_GENRES":
      const allVideogames = state.allVideogames;
      const genresFiltered =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((e) => e.genres.includes(action.payload));
      return {
        ...state,
        videogames: genresFiltered,
      };

    case "FILTER_CREATED":
      const allVideogames2 = state.allVideogames;
      console.log(allVideogames2);
      const createdFilter2 =
        action.payload === "created"
          ? allVideogames2.filter((el) => el.createdInDb === true)
          : allVideogames2.filter((el) => el.createdInDb !== true);
      console.log(createdFilter2);
      return {
        ...state,
        videogames:
          action.payload === "All" ? state.allVideogames : createdFilter2,
      };

    case "ORDER_BY_NAME":
      const sortedArrName =
        action.payload === "asc"
          ? state.videogames.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedArrName,
      };

    case "ORDER_BY_RATING":
      const sortedArrRating =
        action.payload === "low"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedArrRating,
      };

    case "GET_NAME_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };

    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    case "POST_VIDEOGAME":
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
