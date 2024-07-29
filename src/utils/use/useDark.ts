import { useEffect, useState } from "react";

type Theme = 'light' | 'dark';
export default function useDark() {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  return [
    theme,
    changeTheme
  ]
}