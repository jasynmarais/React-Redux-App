import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import YeQuote from "./components/YeQuote";
import * as reducers from "./state/reducers";
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  background-color: #323330;
`;

const monsterReducer = combineReducers({
  quote: reducers.quoteReducer
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
      <StyledApp>
        <h2>Ye Quotes</h2>
        <YeQuote />
        </StyledApp>
    </Provider>
  );
}

export default App;
