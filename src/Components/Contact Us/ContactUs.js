import React from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";

//contact Information
const ContactUs = () => {
  
  const style = { backgroundColor: "#005555" , color: "white" };
  return (
    <div className="d-flex justify-content-evenly py-5 m-0 bg-light fw-bold">
      <div style={style} className="p-5">
        <ListGroup variant="flush">
          <ListGroup.Item style={style}>
            <FontAwesomeIcon size="2x" icon={faPhone} />
            <span>+9901293274</span>
          </ListGroup.Item>
          <ListGroup.Item style={style}>
            {" "}
            <FontAwesomeIcon size="2x" icon={faAddressCard} />
            <span className="m-2">
              54, Brooklyn Sq., Sillicon Valley, San Fransisco, California, USA
            </span>
          </ListGroup.Item>
          <ListGroup.Item style={style}>
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
            <span className="m-2">roam@travel.com</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Image src="https://previews.123rf.com/images/tupungato/tupungato1301/tupungato130100436/17654356-postcard-collage-from-rome-italy-all-photos-taken-by-me-and-available-also-separately-.jpg" height={500} width = {650} />
      </div>
    </div>
  );
};

export default ContactUs;
