import { Card, CardTitle } from '../ui/card'
import { MailIcon, MessageCircleMoreIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { SiDiscord, SiLinkedin } from '@icons-pack/react-simple-icons'

const WorkTogether = () => {
  const links = [
    { href: "https://discordapp.com/users/709811143295762454", Icon: SiDiscord},
    { href: "mailto:robertaszencius@gmail.co", Icon: MailIcon},
    { href: "https://www.linkedin.com/in/robertas-ženčius-06974425a", Icon: SiLinkedin},
  ]


  return (
    <Card className='dark flex flex-col justify-center items-center w-full'>
        <div className='rounded-full border bg-neutral-950 text-card-foreground shadow-sm p-4 m-2'>
            <MessageCircleMoreIcon className='transition-all duration-300 hover:rotate-12 hover:scale-110 text-primary-500' size={48} />
        </div>
        <CardTitle className='text-center'>
            <h3 className='font-bold whitespace-nowrap'>Let's Work Together</h3>
            <p className='text-sm text-neutral-400 whitespace-nowrap'>and make your ideas come to <span className='text-primary-400'>reality</span></p>
        </CardTitle>
        <div className='my-5 flex justify-evenly w-full'>
            {links.map(({ href, Icon}, index) => (
                <Button key={index} asChild>
                    <a target='_blank' href={href}><Icon /></a>
                </Button>
            ))}
        </div>
    </Card>
  )
}

export default WorkTogether