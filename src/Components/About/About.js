import React from "react";
import { Image } from "react-bootstrap";
import "animate.css";
const About = () => {
  return (
    <div className="d-flex justify-content-evenly p-5 fw-bold">
      <div className="p-5">
        <h1 className="animate__animated animate__swing animate__infinite fw-bolder p-5">
          
          About Roam
        </h1>
        <p>
          Welcome to Roam! Roam is a travelling company website that is solely
          built for uncomplicated user interface. Roam has reliable and
          authentic information about local as well as any international tourist
          spot. Each destination and travel experience is reviewed by our
          customers here. The website has information about transportation
          options,experience reviews and gallery of images.Roam allows forming
          women groups that encourage women all over the world to travel.
        </p>
      </div>
      <div>
        <Image src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
        <p className="p-3">
        "Travel is the only thing you buy that makes you richer”
        </p>
        <p className="fs-2 fw-bold">-Nafisa Farzana</p>
        <p>CEO, Roam</p>
      </div>
    </div>
  );
};

export default About;
