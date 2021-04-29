import { createStore, combineReducers, applyMiddleware } from "redux";
import classInstanceUnpacker from "./middleware/classInstanceUnpacker";
import {
  PaginationReducers,
  RailUiReducers,
  TaskDataReducers,
} from "./modules/index";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  railUi: RailUiReducers, //stateSliceName: reducerName
  pagination: PaginationReducers,
  taskData: TaskDataReducers,
});

const logger = createLogger();
//Always make sure classInstanceUnpacker comes at last when using class-based action.
export const middleware = [thunk, classInstanceUnpacker, logger]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;

// Export the store signiture for components to use.
export type RootState = ReturnType<typeof rootReducer>;