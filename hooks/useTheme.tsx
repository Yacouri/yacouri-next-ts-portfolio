import { useEffect, useState } from 'react';
import { lightMode, darkMode } from '../styles/themes';

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>('light');

  const setMode = (mode: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', mode);
      setTheme(mode);

      window.location.reload();
    }
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentTheme = localStorage.getItem('theme');
      currentTheme && setTheme(currentTheme);
    }
  }, []);

  const mode = theme === 'light' ? lightMode : darkMode;
  return { mode, theme, themeToggler };
};

export default useTheme;
