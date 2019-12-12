import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from 'styled-components';

const StyledYeezy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100vw;
  text-align: center;
  
  img {
    width: 50%;
    margin: 15px;
  } 
  p {
    color: #f0db4f;
    font-size: 2rem;
    width: 50%;
  }
  button {
    height: 3.5rem;
    width: 50vw;
    border-radius: 15px;
    background-color: #f0db4f;
    border: none;
    margin: 15px;
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
  }
`;

export function YeQuote({ getKanyeQuote, quote }) {
  //debugger
  useEffect(() => {

    getKanyeQuote();
  }, []);

  return (
    <StyledYeezy>
      <img src="yeezy.jpg" />
        <p>{quote.quote}</p>
        <button onClick={getKanyeQuote}>Receive Wisdom</button>
    </StyledYeezy>
  );
}

export default connect(
  state => state,
  actionCreators
)(YeQuote);