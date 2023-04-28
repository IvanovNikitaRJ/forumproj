import React from 'react';
import "./App.css"
import BoardRouter from "./components/BoardRouter";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";

const App = () => {
  return (
      <Provider store={store}>
      <BrowserRouter>
          <BoardRouter/>
      </BrowserRouter>
      </Provider>
  );
};

export default App;
