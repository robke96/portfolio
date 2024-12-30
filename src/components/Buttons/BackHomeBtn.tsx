import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const BackHomeBtn = () => {
  return (
    <Button asChild variant='secondary'>
        <a className='flex gap-2 items-center' href='/'><ArrowLeft /> Back to Home</a>
    </Button>
  )
}

export default BackHomeBtn