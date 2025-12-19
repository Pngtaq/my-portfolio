import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button
      className={`border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 relative w-6.25  sm:w-11.25 h-6.5 sm:h-6.5 rounded-full transition-colors duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-500" : "bg-gray-300"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={` absolute top-[2.4px] sm:top-px sm:left-0.5 sm:w-5 sm:h-5 left-0.5 w-4.5 h-4.5 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center ${
          isDarkMode ? "translate-x-0 sm:translate-x-4.5" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <Moon className="w-3 h-3  text-gray-700" />
        ) : (
          <Sun className="w-3 h-3  text-gray-700" />
        )}
      </div>
    </button>
  );
}
