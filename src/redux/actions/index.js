export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavouritesAction = (company) => {
  return { type: ADD_TO_FAVOURITES, payload: company };
};

export const removeFromFavouritesAction = (company) => {
  return { type: REMOVE_FAVOURITES, payload: company };
};

export const fetchJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const jobs = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: jobs,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
