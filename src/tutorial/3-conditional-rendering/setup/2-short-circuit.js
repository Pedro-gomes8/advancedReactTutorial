import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState("");
  const [isError, setisError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "hi"}</h1>
      <button className="btn" onClick={() => setisError(!isError)}>
        Toggle error
      </button>
      {isError && <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
