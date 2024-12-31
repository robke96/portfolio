import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { BoxesIcon, BriefcaseIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Marquee from '../ui/marquee'

const Projects = () => {
  const images = [
    { src: "/img/portfolio_page.webp" },
    { src: "/img/comingsoon.webp" },
    { src: "/img/comingsoon.webp" },
  ]

  return (
    <Card className='dark'>
        <CardHeader>
            <CardTitle className='flex gap-4 items-center text-3xl'>
                <BriefcaseIcon size={36} className='text-primary-400' />
                <h3>Projects</h3>
            </CardTitle>
        </CardHeader>
        <CardContent className='relative pb-6 flex justify-center items-center'>
            <Marquee vignette className='relative items-center'>
            {images.map(({ src }, index) => (
                <img className='h-24 w-full rounded-xl' src={src} alt='image' key={index}></img>
            ))}
            </Marquee>
            <Button className='absolute inset-x-0 bottom-4 z-50 mx-auto w-fit' asChild variant="secondary">
                <a href='/projects' className='rounded-xl cursor-pointer'>
                <BoxesIcon />
                View Projects
                </a>
            </Button>
        </CardContent>
    </Card>
  )
}

export default Projects