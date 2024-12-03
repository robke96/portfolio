import avatarImage from "@/assets/images/avatar.webp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Status from "./Status";
import { CalendarDays, ClockIcon, CoffeeIcon, DownloadIcon, EarthIcon, GithubIcon, GuitarIcon, HouseIcon, Icon, MailboxIcon, MapPinHouseIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

// to grab gmt+2 or gmt+3 depending on date;
function getLithuaniaTimezone() {
  const lithuaniaDate = new Date().toLocaleString("en-US", { timeZone: "Europe/Vilnius" });
  const lithuaniaTime = new Date(lithuaniaDate);

  const offset = -lithuaniaTime.getTimezoneOffset() / 60;
  return `UTC${offset >= 0 ? "+" : ""}${offset}`;
}

const ProfileCard = () => {
  const buttons = [
    { href: "#", Icon: MailboxIcon, label: "Hire Me" },
    { href: "#", Icon: DownloadIcon, label: "My Resume" },
    { href: "#", Icon: GithubIcon, label: "Github" },
  ]

  const tags = [
    { Icon: EarthIcon, label: "English & Lithuanian" },
    { Icon: MapPinHouseIcon, label: "Lithuania" },
    { Icon: CalendarDays, label: "18y/o" },
    { Icon: HouseIcon, label: "Freelancer" },
    { Icon: CoffeeIcon, label: "Coffee Addict" },
    { Icon: ClockIcon, label: getLithuaniaTimezone()},
    { Icon: GuitarIcon, label: "Guitar Enthusiast"}
  ]

  return (
    <Card className='dark w-max'>
        <CardHeader className="flex flex-row relative">
            <img className="rounded-2xl w-32" src={avatarImage.src} alt="Profile pic" />
            <div className="ml-3 pb-5 flex flex-col justify-center">
              <CardTitle className='text-5xl'>Robertas</CardTitle>
              <CardDescription className="font-bold text-md">I’m a <span className="text-green-800">Full Stack Developer</span></CardDescription>
            </div>
            <div className="absolute right-10">
              <Status available={true} />
            </div>
        </CardHeader>
        <CardContent>
          {/* tags */}
          <div className='bg-bg-dark rounded-lg p-4 max-w-xl'>
              {tags.map(({ Icon, label }) => (
                <Badge key={label} variant="secondary" className="m-1 w-max hover:scale-105 transition duration-300 ease-in-out"><Icon className="mr-2" />{label}</Badge>
              ))}
          </div>
          {/* buttons */}
          <div className="flex flex-col justify-between w-full md:flex-row md:gap-5">
            {buttons.map(({ Icon, href, label}, index) => (
              <Button className={`w-full mt-5 px-10 ${index === 0 ? 'bg-green-800 hover:bg-green-900' : ''}`} variant="secondary" key={href}>
                <Icon />
                {label}
              </Button>
            ))}
          </div>
        </CardContent>
    </Card>
  )
}

export default ProfileCard