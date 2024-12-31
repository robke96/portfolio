import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Status from "./Status";
import { CalendarDays, ClockIcon, CoffeeIcon, DownloadIcon, EarthIcon, HouseIcon, MailboxIcon, MapPinHouseIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { SiGithub } from "@icons-pack/react-simple-icons";
import moment from "moment-timezone";

// to grab gmt+2 or gmt+3 depending on date;
function getLithuaniaTimezone() {
  const offsetMinutes = moment.tz("Europe/Vilnius").utcOffset()
  const gmtOffset = `GMT${offsetMinutes >= 0 ? "+" : ''}${offsetMinutes / 60}` 

  return gmtOffset;
}

const ProfileCard = () => {
  const buttons = [
    { href: "mailto:robertaszencius@gmail.com", Icon: MailboxIcon, label: "Hire Me" },
    // { href: "#", Icon: DownloadIcon, label: "My Resume" }, // disabled temporary
    { href: "https://github.com/robke96", Icon: SiGithub, label: "Github" },
  ]

  const tags = [
    { Icon: EarthIcon, label: "English & Lithuanian" },
    { Icon: MapPinHouseIcon, label: "Lithuania" },
    { Icon: CalendarDays, label: "18y/o" },
    { Icon: HouseIcon, label: "Freelancer" },
    { Icon: CoffeeIcon, label: "Coffee Addict" },
    { Icon: ClockIcon, label: getLithuaniaTimezone()},
  ]

  return (
    <Card className='dark max-w-4xl'>
        <CardHeader className="flex flex-row items-center">
            <img className="rounded-2xl w-28 h-28" src="/img/avatar.webp" alt="Profile pic" />
            <div className="ml-3 pb-5 w-full flex flex-col">
              <Status className="mt-2 order-1 sm:order-none sm:self-end whitespace-nowrap" available={true} />
              <CardTitle className='text-2xl sm:text-4xl lg:text-5xl'>Robertas</CardTitle>
              <CardDescription className="font-bold text-sm">I’m a <span className="text-primary-400">Full Stack Developer</span></CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          {/* tags */}
          <div className='bg-bg-dark flex max-w-[100%] flex-wrap gap-2 rounded-xl p-3'>
              {tags.map(({ Icon, label }) => (
                <Badge key={label} variant="secondary" className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                  <Icon className="mr-2 text-primary-500" />
                  <p>{label}</p>
                </Badge>
              ))}
          </div>
          {/* buttons links */}
          <div className="flex flex-col md:justify-evenly md:flex-row">
            {buttons.map(({ Icon, href, label}, index) => (
              <Button asChild className={`mt-4 ${index === 0 ? 'hover:border-primary-900' : ''}`} key={href}>
                <a target="_blank" href={href}>
                  <Icon />
                  {label}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
    </Card>
  )
}

export default ProfileCard