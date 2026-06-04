import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log('Component rendered!');
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    // cleanup function
    return () => clearInterval(interval);
  },[] );
  return (
    <>
      <p > Time: {seconds}</p>
    </>
  );
}

export default Timer;
