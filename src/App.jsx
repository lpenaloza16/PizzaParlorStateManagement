// import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PizzaComponent from "./PizzaComponent";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Work at a Pizza Place</h1>
        <PizzaComponent />
      </div>
    </Provider>
  );
}

export default App;
