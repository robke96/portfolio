import Marquee, { type MarqueeProps } from "@/components/ui/marquee";
import { type IconType } from '@icons-pack/react-simple-icons';

interface MarqueeListProps extends MarqueeProps {
    list: { Icon: IconType, name: string }[],
};

const MarqueeList = ({ list, ...marqueeProps }: MarqueeListProps) => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
    <Marquee  {...marqueeProps}>
      {list.map(({ Icon, name }, index) => (
        <div className='flex space-x-3 text-center bg-bg-dark py-2 px-5 rounded-xl' key={index}>
            <Icon />
          <p>{name}</p>
        </div>
      ))}
    </Marquee>
  </div>
  )
}

export default MarqueeList