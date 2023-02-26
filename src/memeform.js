import React, { useState } from "react";
import "./memeform.css";

export default function Memeform() {
  const [allMemes, setAllMemes] = useState([]);
  const memeUrl = `https://api.imgflip.com/get_memes`;

  React.useEffect(() => {
    fetch(memeUrl)
      .then((response) => response.json())
      .then((memeData) => setAllMemes(memeData.data.memes));
  }, [memeUrl]);

  const [meme, setMeme] = useState({
    topText: "more",
    bottomText: "chips",
    randomImage: "http://i.imgflip.com/3l60ph.jpg",
  });

  function getImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function getMemeText(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          id="enter-text"
          placeholder="top"
          onChange={getMemeText}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          id="enter-text"
          placeholder="bottom"
          onChange={getMemeText}
          name="bottomText"
          value={meme.bottomText}
        />
        <button onClick={getImage} id="meme--button">
          {" "}
          New Meme Image 🪄
        </button>
      </div>
      <div id="color">
        <div className="meme">
          <img
            src={meme.randomImage}
            className="meme--image"
            alt="funny joke"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
