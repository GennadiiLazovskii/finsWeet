import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePages, AboutUsPages, SermonsPages } from './components/pages';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path='/AboutUs' element={<AboutUsPages/>}/>
            <Route path='/Sermon' element={<SermonsPages/>}/>
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
