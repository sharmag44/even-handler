import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [isMouseOut, setMouseOut] = useState(false);
  function handleClick() {
    setHeadingText("Submitted");
  }
  function mouseIn() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: isMouseOver ? "black" : "white"
        }}
        onClick={handleClick}
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
