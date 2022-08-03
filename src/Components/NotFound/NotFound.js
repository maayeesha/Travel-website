import React from "react";
import { Image } from "react-bootstrap";
import notfound from "./404.png";
const NotFound = () => {
  return (
    <div>
      <Image src={notfound}></Image>
    </div>
  );
};

export default NotFound;
