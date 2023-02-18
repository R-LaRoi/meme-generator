import React, { useState } from "react";
import "./memeform.css";
import memesData from "./memesData.js";

export default function Memeform() {
  const [memeImage, setMemeImage] = useState("");
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  console.log(memeImage);

  function getImage(event) {
    event.preventDefault();
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="main">
      <div className="form">
        <input type="text" id="enter-text" placeholder="top" />
        <input type="text" id="enter-text" />
        <button onClick={getImage}> New Meme Image 🪄</button>
      </div>
      <div id="color">
        <img src={memeImage} alt="meme" className="meme--image" />{" "}
      </div>
    </div>
  );
}
