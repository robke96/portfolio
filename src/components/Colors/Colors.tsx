import colors from 'tailwindcss/colors'
import { Card } from '../ui/card'
import { useState } from 'react'

const Colors = () => {
  const colorList = [
    colors.red,
    colors.yellow,
    colors.blue,
    colors.purple,
    colors.green,
  ];

  const [_, setThemeColor] = useState("");
  const handleColorChange = (color: string) => {
    setThemeColor(color);
    document.documentElement.style.setProperty('--borderHoverColor', color);
  }

  return (
    <Card className="dark flex py-6 justify-center items-center">
      <div className="flex w-full justify-evenly">
        {colorList.map((color, index) => (
          <div
            key={index}
            className={`cursor-pointer w-9 h-9 rounded-full`}
            style={{ backgroundColor: color[600] }}
            onClick={() => handleColorChange(color[600])}
          ></div>
        ))}
      </div>
    </Card>
  );
}

export default Colors