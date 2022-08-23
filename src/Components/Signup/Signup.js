import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Image } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/bookings");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="my-5">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group id="password">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="fw-bold"
              type="text"
              ref={nameRef}
              required
            />
          </Form.Group>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-md-left">Email</Form.Label>
              <Form.Control
                className="fw-bold"
                type="email"
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

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                className="fw-bold"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 my-4 fw-bold"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 my-4">
          Already have an account? <Link to="/login"> Book a tour </Link>
        </div>
      </Card>
    </>
  );
}
