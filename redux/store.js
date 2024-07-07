import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  portfolioTheme: themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
