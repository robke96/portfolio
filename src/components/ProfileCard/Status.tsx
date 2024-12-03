import { Badge } from "../ui/badge";

interface StatusProps {
    available: boolean;
}

const Status = ({ available }: StatusProps) => {
    return available ? <Badge className="max-w-fit text-sm" variant="success">
        Available To Work
    </Badge> : null
}

export default Status