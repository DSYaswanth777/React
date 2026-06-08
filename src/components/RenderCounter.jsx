import React, { useContext, useRef, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

function RenderCounter() {
  const [text, setText] = useState("");
  const renderCount = useRef(0);
  const theme = useContext(ThemeContext);
  renderCount.current += 1;

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something...."
      />
      {/* function App() {
  const theme = 'dark';
  return <Layout theme={theme} />;
}

function Layout({ theme }) {
  return <Sidebar theme={theme} />;
}

function Sidebar({ theme }) {
  return <NavItem theme={theme} />;
}

function NavItem({ theme }) {
  return <Icon theme={theme} />;
}

function Icon({ theme }) {
  return <span className={theme}>★</span>; // finally used here
} */}
      <p> This Component has rendered {renderCount.current} times</p>

      <p >Current Theme color {theme}</p>
    </>
  );
}

export default RenderCounter;
