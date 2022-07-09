import Header from './components/Home/Header/Header';
// import FirstScreen from './components/Home/FirstScreen/FirstScreen';
// import Relevant from './components/Home/Relevant/Relevant';
// import Compassion from './components/Home/Compassion/Compassion';
// import BenefitsJoining from './components/Home/BenefitsJoining/BenefitsJoining';
// import UpcomingEvent from './components/Home/UpcomingEvent/UpcomingEvent';
// import AroundWorld from './components/Home/AroundWorld/AroundWorld';
// import WatchAndListen from './components/Home/WatchAndListen/WatchAndListen';
import AboutUsFirstScrin from './components/AboutUs/AboutUsFirstScrin/AboutUsFirstScrin';
import AboutUsCompassion from './components/AboutUs/AboutUsCompassion/AboutUsCompassion';
import Footer from './components/Home/Footer/Footer';
import AboutUsJoiningOurChurch from './components/AboutUs/AboutUsJoiningOurChurch/AboutUsJoiningOurChurch';

function App() {
  return (
    <>
      <Header/>
      {/* <FirstScreen/>
      <Relevant/>
      <Compassion/>
      <BenefitsJoining/>
      <UpcomingEvent/>
      <AroundWorld/>
      <WatchAndListen/> */}

      {/* AboutUS */}

      <AboutUsFirstScrin/>
      <AboutUsCompassion/>
      <AboutUsJoiningOurChurch/>
      <Footer/>
    </>
    );
}

export default App;
