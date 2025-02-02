import { useTheme } from "hooks";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </button>
  );
};
