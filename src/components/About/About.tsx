import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { SquareUserRoundIcon } from 'lucide-react'

const About = () => {
  return (
    <Card className='dark max-w-4xl w-full h-full'>
        <CardHeader>
            <CardTitle className='flex items-center'>
                <SquareUserRoundIcon size={36} className='text-primary-400' />
                <h3 className='ml-3 text-3xl text-center'>About Me</h3>
            </CardTitle>
        </CardHeader>
        <CardContent className='mx-auto md:max-w-64'>
            <p className='text-neutral-400 font-bold text-base'>
            Hi, I’m Robertas, an 18-year-old full-stack developer from Lithuania. 
            <br /><br />
            I started coding in 2022 by building Discord bots and have since expanded my skills to web development.
            <br /><br />
            I’m currently freelancing and looking for opportunities to grow as a developer.
            </p>
        </CardContent>
    </Card>
  )
}

export default About