import SermonsFirstScrean from "../Sermons/SermonsFirstScrean/SermonsFirstScrean";
import UpcomingEvent from '../Home/UpcomingEvent/UpcomingEvent';
import SermonsEvents from '../Sermons/SermonsEvents/SermonsEvents';

const SermonsPages = () => {
    return (
        <>
            <SermonsFirstScrean />
            <UpcomingEvent />
            <SermonsEvents />
        </>
    );
}

export default SermonsPages;