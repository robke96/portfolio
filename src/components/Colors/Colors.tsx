import { useEffect, useState } from 'react'
import { Card } from '../ui/card'

const themes = ["red", "yellow", "blue", "purple", "green"]

const Colors = () => {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== 'undefined') {
          const savedTheme = localStorage.getItem('theme');
          return savedTheme ? savedTheme.replace('theme_', '') : themes[0];
        }
        return themes[0]; // Default theme for SSR
      });


//   update theme on html
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.className = ''; // Clear previous classes
      html.classList.add(`theme_${theme}`);
      localStorage.setItem('theme', `theme_${theme}`);
    }
  }, [theme]);

  return (
    <Card className="dark flex py-6 justify-center items-center">
      <div className="flex w-full justify-evenly">
        {themes.map((color, index) => (
          <div
            key={index}
            className={`cursor-pointer w-9 h-9 rounded-full bg-[${color}]`}
            onClick={() => setTheme(color)}
          >{color}</div>
        ))}
      </div>
    </Card>
  );
}

export default Colors