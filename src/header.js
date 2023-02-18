import React from "react";
import "./header.css";
import image1 from "./image1.png";

export default function Header() {
  return (
    <div className="header">
      <img
        src={image1}
        alt="cartoon"
        style={{ width: "30px", float: "left" }}
      ></img>
      <span className="title">Meme Generator</span>
      <span className="sub-text"> React Course - Project 3 </span>
    </div>
  );
}
