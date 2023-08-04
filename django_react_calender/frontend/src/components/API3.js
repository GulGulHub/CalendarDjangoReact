import React, { useState } from "react";

const API3 = () => {
  const url_joke =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokeDelivery, setJokeDelivery] = useState("");

  const makeJoke = () => {
    try {
      fetch(url_joke)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const setup = data["setup"];
          const delivery = data["delivery"];
          setJokeSetup(setup);

          setTimeout(() => {
            setJokeDelivery(delivery); // Delayed update of jokeDelivery after 3 seconds
          }, 3000);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">HOW ABOUT A JOKE ?</h2>
      <button
        id="joke-button"
        className="border-pink-500 border-2 rounded py-2 px-4 text-green-500 hover:bg-pink-500 hover:text-white transition"
        onClick={makeJoke}
      >
        Get Joke
      </button>
      <div id="show-joke" className="mt-4 text-white">
        {jokeSetup && <p>{jokeSetup}</p>}
        {jokeDelivery && <p>{jokeDelivery}</p>}
      </div>
    </div>
  );
};

export default API3;
