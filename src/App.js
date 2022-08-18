import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/Contact Us/ContactUs";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import Tours from "./Components/Tours/Tours";
import Signup from "./Components/Signup/Signup";
import { Container } from "react-bootstrap";
import Login from "./Components/Login/Login";
import Bookings from "./Components/Bookings/Bookings";
import PrivateRoute from "./Components/PrivaterRoute/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";

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
        <PrivateRoute exact path="/bookings">
          <Bookings />
        </PrivateRoute>

        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/tours">
          <Tours></Tours>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/signup">
          <Container className="fw-bold d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Signup />
            </div>
          </Container>
        </Route>
        <Route path="/login">
          <Container className="fw-bold d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Login />
            </div>
          </Container>
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
