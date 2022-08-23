import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for more instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }
  return (
    <div
      className="fw-bold d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
      }}
    >
      <div className="w-100 my-5" style={{ maxWidth: "400px" }}>
        <Card className="my-5">
          <Card.Body className="my-5">
            <h2 className="text-center mb-4">Reset Password</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label className="text-md-left">
                  Enter your Email
                </Form.Label>
                <Form.Control
                  className="fw-bold"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Button
                disabled={loading}
                className="w-100 my-4 fw-bold"
                type="submit"
              >
                Reset Password
              </Button>
            </Form>
            <div className="text-center mt-3">
              <Link
                to="/login"
                style={{
                  backgroundColor: "#e1ad01",
                  color: "white",
                  padding: "10px",
                  textDecoration: "none",
                  borderRadius: "8%",
                }}
              >
                {" "}
                Log In{" "}
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
