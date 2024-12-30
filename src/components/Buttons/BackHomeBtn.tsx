import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const BackHomeBtn = () => {
  return (
    <Button variant='secondary'>
        <ArrowLeft />
        <a href='/'>Back to Home</a>
    </Button>
  )
}

export default BackHomeBtn