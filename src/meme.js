import React from "react";
import Memeform from "./memeform";
import Header from "./header";

import "./meme.css";

export default function Meme() {
  return (
    <div className="card">
      <Header />
      <Memeform />
    </div>
  );
}
