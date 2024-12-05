import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface StatusProps {
    available: boolean;
    className?: string;
}

const Status = ({ available, className }: StatusProps) => {
    return available ? <Badge className={cn("w-fit text-xs text-center", className)} variant="success">
        Available To Work
    </Badge> : null
}

export default Status