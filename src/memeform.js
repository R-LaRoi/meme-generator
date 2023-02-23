import React, { useState } from "react";
import "./memeform.css";
import memesData from "./memesData.js";

export default function Memeform() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages] = useState(memesData);

  function getImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="main">
      <div className="form">
        <input type="text" id="enter-text" placeholder="top" />
        <input type="text" id="enter-text" placeholder="bottom" />
        <button onClick={getImage} id="meme--button">
          {" "}
          New Meme Image 🪄
        </button>
      </div>
      <div id="color">
        <img src={meme.randomImage} alt="meme" className="meme--image" />{" "}
      </div>
    </div>
  );
}
