import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { LayersIcon } from 'lucide-react'
import { SiArduino, SiBun, SiCss3, SiFigma, SiHtml5, SiJavascript, SiLinux, SiMongodb, SiNodedotjs, SiReact, SiSass, SiTypescript, SiVscodium } from '@icons-pack/react-simple-icons'
import MarqueeList from './MarqueeList'

const TechStack = () => {
  const stackList = [
    { Icon: SiTypescript, name: "Typescript" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiBun, name: "Bun" },
    { Icon: SiHtml5, name: "HTML" },
    { Icon: SiCss3, name: "CSS" },
    { Icon: SiSass, name: "SCSS" },
    { Icon: SiJavascript, name: "Javascript" },
    { Icon: SiReact, name: "React" },
    { Icon: SiVscodium, name: "VSCodium" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiFigma, name: "Figma" },
    { Icon: SiLinux, name: "Linux" },
    { Icon: SiArduino, name: "Arduino" },
  ]
  const firstHalf = stackList.slice(0, Math.ceil(stackList.length /2));
  const secondHalf = stackList.slice(Math.ceil(stackList.length /2));

  return (
    <Card className='dark w-full pb-1'>
      <CardHeader>
        <CardTitle className='flex items-center text-center text-2xl gap-3'>
          <LayersIcon size={36} className='text-primary-400' />
          <h3>My Skillset</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center mx-auto flex-grow flex-col overflow-hidden'>
          {/* first half of list */}
          <MarqueeList pauseOnHover vignette list={firstHalf} className='[--duration:40s]' />
          {/* second half reverse of list */}
          <MarqueeList  pauseOnHover reverse={true} list={secondHalf} className='[--duration:40s]' />
      </CardContent>
    </Card>
  )
}

export default TechStack