import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {

  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      🌙 / ☀️
    </button>
  );
};

export default ThemeToggle;