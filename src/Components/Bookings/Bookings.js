import React, { useEffect, useState } from "react";
import { Button, Card, Alert, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export default function Bookings() {
  const [error, setError] = useState();
  const [destination, setDestination] = useState([]);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [status, setStatus] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  // if (user) {
  //   console.log(user);
  // } else {
  //   console.log("no user found");
  // }

  async function handleLogout() {
    setError("");
    try {
      history.push("/home");
      await logout();
    } catch {
      setError("Failed to Log Out");
    }
  }

  const submitFirestore = async () => {
    const usersRef = collection(db, "Users");
    try {
      await setDoc(doc(usersRef, user.uid), {
        destination: [...destination, status],
      });
      getDocument();
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = (event) => {
    setStatus(event.target.value);
  };

  const getDocument = async () => {
    const docRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDestination([...docSnap.data().destination]);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getDocument();
  }, []);

  return (
    <Container className="fw-bold">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 fw-bold">My Bookings</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h3>Email: {currentUser.email} </h3>

          {destination ? destination.map((item) => <p>{item}</p>) : ""}
          <div>
            {" "}
            <Form.Select
              aria-label="Default select example"
              className="fw-bold"
              value={status}
              onChange={changeStatus}
            >
              <option>Select Destination/Tour </option>
              <option value="Australia">Australia</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Dhaka">Dhaka</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="London">London</option>
              <option value="Switzerland">Switzerland</option>
            </Form.Select>
          </div>
          <Button
            className="btn btn-primary w-50 fw-bold mt-3"
            onClick={() => submitFirestore()}
          >
            Update Bookings
          </Button>
        </Card.Body>
        <div>
          <Button
            className="fw-bold w-50"
            variant="outline-secondary"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </Card>
    </Container>
  );
}
