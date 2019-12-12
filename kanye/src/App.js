import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Test from "./components/Test";
import * as reducers from "./state/reducers";

const monsterReducer = combineReducers({
  test: reducers.testReducer
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Yeezy Quotes</h2>
        <Test />
      </div>
    </Provider>
  );
}

export default App;
