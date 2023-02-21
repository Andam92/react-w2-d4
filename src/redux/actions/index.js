export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const LOADING_ON = "LOADING_ON";
export const LOADING_OFF = "LOADING_OFF";
export const HAS_ERROR = "HAS_ERROR";
export const HAS_NOT_ERROR = "HAS_NOT_ERROR";

export const addToFavouritesAction = (company) => {
  return { type: ADD_TO_FAVOURITES, payload: company };
};

export const removeFromFavouritesAction = (company) => {
  return { type: REMOVE_FAVOURITES, payload: company };
};

export const fetchJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOADING_ON,
    });
    dispatch({
      type: HAS_NOT_ERROR,
    });
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const jobs = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: jobs,
        });
      } else {
        dispatch({
          type: HAS_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: HAS_ERROR,
      });
    }
    dispatch({
      type: LOADING_OFF,
    });
  };
};
