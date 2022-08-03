import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/Contact Us/ContactUs";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import Destinations from "./Components/Destinations/Destinations";
import Tours from "./Components/Tours/Tours";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/destinations">
          <Destinations></Destinations>
        </Route>
        <Route path="/tours">
          <Tours></Tours>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
