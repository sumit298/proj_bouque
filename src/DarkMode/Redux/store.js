import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const middleWare = [];
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default Store;
