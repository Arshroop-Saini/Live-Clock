import React, { useState } from "react";

function App() {
  setInterval(update, 1000);

  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [currentTime, setTime] = useState(time);

  function update() {
    const newTime = new Date().toLocaleTimeString();

    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
