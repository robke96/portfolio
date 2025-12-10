import { type ReactNode, useEffect } from 'react'

type Props = {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.className = ''; // Clear previous classes
        document.documentElement.classList.add(savedTheme);
      }
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider
