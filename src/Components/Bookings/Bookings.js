import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 fw-bold">My Bookings</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-bookings" className="btn btn-primary w-100 mt-3">
            Update Bookings
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="Link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
