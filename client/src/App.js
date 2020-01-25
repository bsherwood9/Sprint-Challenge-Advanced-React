import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList";
import useDarkMode from "./hooks/useDarkMode";
const App = () => {
  const [darkMode, setDarkMode, toggleMode] = useDarkMode("darkMode", false);
  return (
    <div data-testid="background" className={`${darkMode ? "blue" : ""}`}>
      <button onClick={toggleMode} data-testid="toggleButton">
        Toggle Mode
      </button>
      <PlayerList />
    </div>
  );
};

export default App;
