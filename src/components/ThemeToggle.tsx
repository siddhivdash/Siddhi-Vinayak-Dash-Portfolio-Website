import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 ${
          theme === 'light' 
            ? 'rotate-0 scale-100' 
            : 'rotate-90 scale-0'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          theme === 'dark' 
            ? 'rotate-0 scale-100' 
            : '-rotate-90 scale-0'
        }`}
      />
    </Button>
  );
};

export default ThemeToggle;

