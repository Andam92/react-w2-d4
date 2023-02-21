import {
  GET_JOBS,
  LOADING_ON,
  LOADING_OFF,
  HAS_ERROR,
  HAS_NOT_ERROR,
} from "../actions";

const initialState = {
  jobList: [],
  isLoading: false,
  hasError: false,
};

const getJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobList: action.payload,
      };

    case LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case HAS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case HAS_NOT_ERROR:
      return {
        ...state,
        hasError: false,
      };

    default:
      return state;
  }
};

export default getJobsReducer;
