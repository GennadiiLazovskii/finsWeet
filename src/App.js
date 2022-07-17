import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePages, AboutUsPages, SermonsPages, BlogPages } from './components/pages';
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
            <Route path='/Blog' element={<BlogPages/>}/>
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
