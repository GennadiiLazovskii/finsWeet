import FirstScreen from './../Home/FirstScreen/FirstScreen';
import Relevant from './../Home/Relevant/Relevant';
import Compassion from './../Home/Compassion/Compassion';
import BenefitsJoining from './../Home/BenefitsJoining/BenefitsJoining';
import UpcomingEvent from './../Home/UpcomingEvent/UpcomingEvent';
import AroundWorld from './../Home/AroundWorld/AroundWorld';
import WatchAndListen from './../Home/WatchAndListen/WatchAndListen';

const HomePages = () => {
    return (
        <>
            <FirstScreen />
            <Relevant />
            <Compassion />
            <BenefitsJoining />
            <UpcomingEvent />
            <AroundWorld />
            <WatchAndListen />
        </>
    );
}

export default HomePages;