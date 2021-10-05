import React from "react";
import { Image } from "react-bootstrap";
import "animate.css";
const About = () => {
  return (
    <div className="d-flex justify-content-evenly p-5 fw-bold">
      <div className="p-5">
        <h1 className="animate__animated animate__swing animate__infinite fw-bolder p-5">
          {" "}
          About Artsy Academy{" "}
        </h1>
        <p>
          Welcome to Artsy Academy, one of the most significant accredited
          independent schools of art and design online. Our accolades are many,
          including recognition by Columbia University’s National Arts
          Journalism survey as “the most influential art education platform in
          the United States" and our consistent ranking among the top arts
          programs in the nation by U.S. News and World Report. Artsy is
          distinct in the way that it provides people of all ages an
          interdisciplinary curriculum and the necessary freedom to develop as
          artists, designers, and scholars. At the same time, we strive for a
          level of rigor, investigation, and cultural relevance that makes SAIC
          truly special. Our students translate the most complex ideas into
          tangible forms—paintings, sculptures, films, performances, books,
          installations, inventions, buildings, community projects, and, more
          often than not, a combination of the above. Few schools in this
          country provide such a broad range of possibilities.
        </p>
      </div>
      <div>
        <Image src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
        <p className="p-3">
          "The earth without art is just "eh".Keeping the impportance of Art in
          mind, we have redesigned art education"
        </p>
        <p className="fs-2 fw-bold">-Linda Weasley</p>
        <p>CEO, Artsy Academy</p>
      </div>
    </div>
  );
};

export default About;
