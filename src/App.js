import Header from './components/Home/Header/Header';
import FirstScreen from './components/Home/FirstScreen/FirstScreen';
import Footer from './components/Home/Footer/Footer';
import Relevant from './components/Home/Relevant/Relevant';
import Compassion from './components/Home/Compassion/Compassion';
import BenefitsJoining from './components/Home/BenefitsJoining/BenefitsJoining';
import UpcomingEvent from './components/Home/UpcomingEvent/UpcomingEvent';

function App() {
  return (
    <>
      <Header/>
      <FirstScreen/>
      <Relevant/>
      <Compassion/>
      <BenefitsJoining/>
      <UpcomingEvent/>
      <Footer/>
    </>
    );
}

export default App;
