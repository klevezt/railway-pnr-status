import React, { useRef, useState } from "react";
import WhiteBlock from "../UI/Blocks/WhiteBlock";

const Search = (props) => {
  const [validNumber, setValidNumber] = useState(true);
  const numberRef = useRef();
  return (
    <WhiteBlock>
      <form
        onSubmit={(e) => {
          if (numberRef.current.value.length !== 10) {
            e.preventDefault();
            setValidNumber(false);
          } else {
            setValidNumber(true);
            props.onSubmit(e, numberRef.current.value);
          }
        }}
        className="needs-validation"
      >
        <div className="mb-3">
          <div className="has-validation">
            <label htmlFor="prn_number" className="form-label">
              PNR Number 10 Digits
            </label>
            <input
              type="number"
              className={`form-control ${!validNumber ? "is-invalid" : ""} `}
              id="prn_number"
              placeholder="Enter the PNR number"
              ref={numberRef}
            />
            <div className="invalid-feedback">Please enter a valid PRN number.</div>
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
