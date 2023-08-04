import React, { useState } from "react";

const API2 = () => {
  const url_advice = "https://api.adviceslip.com/advice";
  const [adviceSlip, setAdviceSlip] = useState("");

  const makeAdvice = () => {
    try {
      fetch(url_advice)
        .then((response) => response.json())
        .then((data) => {
          const adviceSlip = data["slip"]["advice"];
          setAdviceSlip(adviceSlip);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">NEED ADVICE ?</h2>
      <button
        id="advice-button"
        className="border-pink-500 border-2 rounded py-2 px-4 text-green-500 hover:bg-pink-500 hover:text-white transition"
        onClick={makeAdvice}
      >
        Get Advice
      </button>
      <div id="show-advice" className="mt-4 text-white">
        {adviceSlip && <p>{adviceSlip}</p>}
      </div>
    </div>
  );
};

export default API2;
