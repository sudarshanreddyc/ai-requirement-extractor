import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-600 text-white rounded">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
