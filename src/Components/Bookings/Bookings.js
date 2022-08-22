import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import db from "../../Firebase/firebase";
import { useAuth } from "../Contexts/AuthContext";
import Login from "../Login/Login";

export default function Bookings() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to Log Out");
    }
  }
  return (
    <Container className="fw-bold">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 fw-bold">My Bookings</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h3>Email: {currentUser.email} </h3>
          <Link
            to="/destinations"
            className="btn btn-primary w-50 fw-bold mt-3"
          >
            Update Bookings
          </Link>
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
