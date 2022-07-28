import React, { useState } from "react";
import Search from "../../components/Search/Search";
import WhiteBlock from "../../components/UI/Blocks/WhiteBlock";
import { encryptWithAES } from "../../Helpers/functions";
import Results from "./Results";

const Content = () => {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});

  const onSubmit = async (e, number) => {
    e.preventDefault();
    setLoading(true);
    setShowResults(true);
    try{
        const encryptedNumber = encryptWithAES(number);
        const response = await fetch("http://185.69.55.209:8080/pnrstatus/master", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ master: encryptedNumber }),
        });
        const result = await response.json();
        setResults(result);
    }
    catch(err){
        console.log(err)
    }
    finally{
        setLoading(false);
    }
  };

  return (
    <>
      <Search onSubmit={onSubmit} />
      {showResults && loading && <WhiteBlock>loading....</WhiteBlock>}
      {showResults && !loading && <Results 
        //   data={results} 
      />}
    </>
  );
};

export default Content;
