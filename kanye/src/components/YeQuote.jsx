import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function YeQuote({ getKanyeQuote, quote }) {
  //debugger
  useEffect(() => {

    getKanyeQuote();
  }, []);

  return (
    <div>
     <p>{quote.quote}</p>

    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(YeQuote);