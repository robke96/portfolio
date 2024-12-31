import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { type projectCardI } from "@/assets/data/projectCards"
import { CodeXml, Eye } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ProjectCardProps extends projectCardI {
    className?: string;
}

const ProjectCard = ({ title, description, img, className, badges, codeSrc, demoSrc }: ProjectCardProps) => {
  return (
    <Card className={`dark ${className}`}>
        <div className='relative h-48 w-full shrink-0 overflow-hidden sm:h-56 p-2'>
            <img className='size-full object-cover object-center rounded-xl' alt='img' src={img} />
        </div>
        <CardContent className='mt-4'>
            <CardTitle className='mb-2'>{title}</CardTitle>
            <CardDescription className='break-words'>{description}</CardDescription>

            <div className='mt-4 flex flex-wrap gap-1.5'>
                {badges.map(({label, Icon, style}, i) => (
                    <Badge key={i} variant="secondary" className={`text-center gap-2 ${style}`}>
                        <Icon size={16} />
                        <p>{label}</p>
                    </Badge>
                ))}
            </div>
        </CardContent>
        <div className='border-t'>
            <div className='inline-flex w-full justify-evenly text-center p-6'>
                <Button asChild={!(!demoSrc)} variant='secondary' disabled={!demoSrc}>
                    <a className='flex justify-center items-center gap-2 ' target='_blank' href={demoSrc}><Eye size={32}/>Live Demo</a>
                </Button>
                <Button asChild={!(!codeSrc)} variant='secondary' disabled={!codeSrc}>
                    <a className='flex justify-center items-center gap-2' target='_blank' href={codeSrc} ><CodeXml size={32}/>Source</a>
                </Button>
            </div>
        </div>
    </Card>
  )
}

export default ProjectCard