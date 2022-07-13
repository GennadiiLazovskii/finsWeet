import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePages, AboutUsPages } from './components/pages';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <HomePages/>
            </Route>

            <Route exact path='/AboutUs'>
              <AboutUsPages/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
