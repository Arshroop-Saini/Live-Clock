import React, { useState } from "react";

function App(props) {
  let time = new Date().toLocaleTimeString();
  var [currentTime, setTime] = useState(time);

  function showTime() {
    var newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(showTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
