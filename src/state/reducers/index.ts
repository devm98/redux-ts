import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export default rootReducer;

export type RooState = ReturnType<typeof rootReducer>;
