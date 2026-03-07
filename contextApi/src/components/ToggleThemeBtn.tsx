import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

export const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={clsx("px-2 py-2 rounded cursor-pointer", {
        "bg-amber-500 text-white": theme === "dark",
        "bg-gray-300 text-gray-800": theme !== "dark",
      })}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
