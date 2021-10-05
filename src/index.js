import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {FavoriteContextsProvider} from '../src/store/favorite-contexts';

ReactDOM.render(
  <FavoriteContextsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextsProvider>,
  document.getElementById("root")
);
