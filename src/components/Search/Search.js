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
        <div className="row align-items-end">
          <div className="col-12 col-sm-7">
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
            </div>
          </div>

          <div className="col-12 col-sm-3 mt-2 mt-sm-0">
            <button type="submit" className="btn btn-main">
              Submit
            </button>
          </div>
        </div>
      </form>
      {!validNumber && (
        <div className="text-danger">Please enter a valid PRN number.</div>
      )}
    </WhiteBlock>
  );
};

export default Search;
