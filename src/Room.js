import React, { useState } from "react";
import "./App.css";

export default function Room() {
  const [isLit, setLit] = useState(false);
  const brightness = isLit ? "lit" : "dark";
  const [currentTemperature, setTemperature] = useState(72);

  return (
    <div className={`room ${brightness}`}>
      <h1>Assignment #4 (React State - Lights ON/OFF)</h1>
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>Flip</button>
      <button onClick={() => setLit(true)}>On</button>
      <button onClick={() => setLit(false)}>Off</button>
      <br />
      {isLit ? (
        <div>
          <p>
            Temperature: {currentTemperature} <span />
            <button onClick={() => setTemperature(currentTemperature - 1)}>
              -
            </button>
            <button onClick={() => setTemperature(currentTemperature + 1)}>
              +
            </button>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
