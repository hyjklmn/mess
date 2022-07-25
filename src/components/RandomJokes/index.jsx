import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
export default function index() {
  const [joke, setJoke] = useState("");
  async function getRandomJoke() {
    const res = await axios({
      url: "https://icanhazdadjoke.com",
      headers: {
        Accept: "application/json",
      },
    });

    setJoke(res.data.joke);
  }
  useEffect(() => {
    try {
      getRandomJoke();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="random-jokes text-center p-5  box-border text-3xl">
      <div className=" max-w-200 h-100 ma border-rounded flex-col">
        <p>{joke}</p>
        <button onClick={getRandomJoke}>Random</button>
      </div>
    </div>
  );
}
