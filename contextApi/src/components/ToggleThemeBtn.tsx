import React from "react";

export const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
