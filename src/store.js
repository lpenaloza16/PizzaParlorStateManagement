import { createStore, combinedReducers } from "redux";
import backpackReducer from "./reducers/backpackReducer";
const rootReducer = combinedReducers({
  backpack: backpackReducer,
  // any other reducers I have in mind
});

const store = createStore(rootReducer);
export default store;
