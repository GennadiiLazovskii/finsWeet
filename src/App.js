import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePages, AboutUsPages } from './components/pages';
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
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
