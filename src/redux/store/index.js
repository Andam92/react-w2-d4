import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers";
import getJobsReducer from "../reducers/getJobs";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  transform: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: getJobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// export default store;

export const persistor = persistStore(store);
