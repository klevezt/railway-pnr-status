import React, { useRef } from "react";
import WhiteBlock from "../UI/Blocks/WhiteBlock";

const Search = (props) => {
  const numberRef = useRef();
  return (
    <WhiteBlock>
      <form onSubmit={(e) => props.onSubmit(e, numberRef.current.value)}>
        <div className="mb-3">
          <div className="has-validation">
            <label htmlFor="prn_number" className="form-label">
              PNR Number 10 Digits
            </label>
            <input
              type="number"
              className="form-control"
              id="prn_number"
              placeholder="Enter the PNR number"
              ref={numberRef}
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </WhiteBlock>
  );
};

export default Search;
