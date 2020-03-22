import React from "react";
import "./normalize.css";
import "./App.css";

import { createStore } from "redux";
import { catReducer as reducer } from "./reducers/catReducer";
import { Provider } from "react-redux";

import CatButton from "./components/CatButton";
import CatFact from "./components/CatFact";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CatButton />
        <CatFact />
      </div>
    </Provider>
  );
}

export default App;
