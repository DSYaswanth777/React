import React, { useState } from "react";

function Toogle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <p>Light is {isOn ? "ON" : "OFF"}</p>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </>
  );
}

export default Toogle;
