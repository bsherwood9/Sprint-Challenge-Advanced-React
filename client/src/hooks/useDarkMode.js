import React, { useState, useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(key, initialValue);
  const toggleMode = () => {
    setStoredValue(!storedValue);
  };
  useEffect(() => {
    storedValue
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [storedValue]);
  return [storedValue, setStoredValue, toggleMode];
};

export default useDarkMode;
