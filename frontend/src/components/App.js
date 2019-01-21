import React, { Component } from "react";
import { createStore } from "redux";
import Genertation from "components/Genertation";
import Dragon from "components/Dragon";
import { generationReducer } from "reducers";
import { generationActionCreator } from "actions/generation";

import "index.css";

const store = createStore(
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log("store state update", store.getState()));

fetch("http://localhost:3000/generation")
  .then((response) => response.json())
  .then((json) => {
    store.dispatch(generationActionCreator(json.generation));
  });

class App extends Component {
  render() {
    return (
      <div>
        <h2>Dragon Stack</h2>
        <Genertation />
        <Dragon />
      </div>
    );
  }
}

export default App;
