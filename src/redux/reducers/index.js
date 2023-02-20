// STATO

import { ADD_TO_FAVOURITES, REMOVE_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

// REDUCER

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    // aggiunge un'azienda
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    // rimuove un'azienda
    case REMOVE_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((e, index) => e !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;
