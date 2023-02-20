import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers";
import getJobsReducer from "../reducers/getJobs";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: getJobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
