import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewsDetails from "./components/NewsDetails/NewsDetails";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/news/:author'>
            <NewsDetails />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
