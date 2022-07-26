import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/bookings");
    } catch {
      setError("Failed to book a tour");
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="m-4">
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-md-left">Email</Form.Label>
              <Form.Control
                className="fw-bold"
                type=""
                ref={emailRef}
                required
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="fw-bold"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100 my-4 fw-bold"
              type="submit"
            >
              Book a tour
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password"> Forgot Password? </Link>
          </div>
          <div className="w-100 text-center mt-2 my-3">
            Need an account? <Link to="/signup">Sign Up </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
