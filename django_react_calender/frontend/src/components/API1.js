import React, { useState } from "react";

const API1 = () => {
  const url_bored = "http://www.boredapi.com/api/activity?type=recreational";
  const [suggestion, setSuggestion] = useState("");

  const makeBored = () => {
    fetch(url_bored)
      .then((response) => response.json())
      .then((data) => {
        const newSuggestion = data["activity"];
        setSuggestion(newSuggestion);
      });
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">BORED ?</h2>
      <button
        className="border-pink-500 border-2 rounded py-2 px-4 text-green-500 hover:bg-pink-500 hover:text-white transition"
        onClick={makeBored}
      >
        Get Suggestion
      </button>
      <div id="show-bored" className="mt-4 text-white">
        {suggestion && <p>{suggestion}</p>}
      </div>
    </div>
  );
};

export default API1;
