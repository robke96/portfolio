import avatarImage from "@/assets/images/avatar.webp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Status from "./Status";
import { CalendarDays, ClockIcon, CoffeeIcon, DownloadIcon, EarthIcon, GithubIcon, HouseIcon, MailboxIcon, MapPinHouseIcon } from "lucide-react";
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
  ]

  return (
    <Card className='dark w-max'>
        <CardHeader className="flex flex-row items-center">
            <img className="rounded-2xl w-24 h-24" src={avatarImage.src} alt="Profile pic" />
            <div className="ml-3 pb-5 w-full flex flex-col justify-center">
              <Status className="mt-2 order-1 sm:order-none sm:self-end" available={true} />
              <CardTitle className='text-2xl sm:text-4xl'>Robertas</CardTitle>
              <CardDescription className="font-bold text-sm">I’m a <span className="text-green-800">Full Stack Developer</span></CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          {/* tags */}
          <div className='bg-bg-dark flex max-w-[50vh] flex-wrap gap-2 rounded-xl p-3'>
              {tags.map(({ Icon, label }) => (
                <Badge key={label} variant="secondary" className="flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                  <Icon className="mr-2" />
                  <p>{label}</p>
                </Badge>
              ))}
          </div>
          {/* buttons links */}
          <div className="flex flex-col md:justify-between md:flex-row">
            {buttons.map(({ Icon, href, label}, index) => (
              <Button asChild className={`mt-5 ${index === 0 ? 'bg-green-800 text-white hover:bg-green-900' : ''}`} key={href}>
                <a href={href}>
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