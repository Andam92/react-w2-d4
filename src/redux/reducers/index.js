// STATO

const initialState = {
  favourites: {
    content: [],
  },
};

// REDUCER

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // aggiunge un'azienda
    case "ADD_TO FAVOURITES":
      return {
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    // rimuove un'azienda
    case "REMOVE_FAV":
      return {
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (e, index) => e !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
