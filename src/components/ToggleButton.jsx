import { Sun, Moon } from "lucide-react";
import { useState } from "react";
export default function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      className={`relative w-11.5 h-6.5 rounded-full transition-colors duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-500" : "bg-gray-300"
      }`}
      onClick={toggleDarkMode}
    >
      <div
        className={`absolute top-1 left-1 w-4.5 h-4.5 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center ${
          isDarkMode ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <Moon className="w-3 h-3 text-gray-700" />
        ) : (
          <Sun className="w-3 h-3 text-gray-700" />
        )}
      </div>
    </button>
  );
}
