import React, { useState } from "react";
import Search from "../../components/Search/Search";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";
import LoadingSpinner from "../../components/UI/Spinners/LoadingSpinner";
import { tmpEncrypt } from "../../Helpers/functions";
import MainFAQ from "./MainFAQ";
import Results from "./Results";

const Content = () => {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [passengerStatus, setPassengerStatus] = useState([]);

  const onSubmit = async (e, number) => {
    e.preventDefault();
    setLoading(true);
    setShowResults(true);
    try {
      const encryptedNumber = tmpEncrypt(number);
      const response = await fetch("pnrstatus/master", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ master: encryptedNumber }),
      });
      const result = await response.json();
      setResults(result);
      setPassengerStatus(JSON.parse(result.passengerStatus))

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <WhiteBlock className="text-center">
        <h4 className="m-0">Indian Railways: PNR Status</h4>
      </WhiteBlock>
      <Search onSubmit={onSubmit} />
      {showResults && loading && (
        <WhiteBlock>
          <LoadingSpinner />
        </WhiteBlock>
      )}
      {showResults && !loading && <Results data={results} passengerStatus={passengerStatus}/>}
      <MainFAQ />
    </>
  );
};

export default Content;
