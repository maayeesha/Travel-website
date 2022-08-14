import React, { useState } from "react";
import { Form, Dropdown, Image, Button } from "react-bootstrap";
const SignIn = () => {
  let baton;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const handleLogin = () => {};
  const handleSignUp = () => {
    setEmail(handleSignUp.target.value);
  };
  /*const {
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props; */
  const style = {
    backgroundColor: "navy",
  };

  if (hasAccount) {
    baton = (
      <>
        <Button onClick={handleLogin} variant="warning fw-bold" type="submit">
          Book a tour
        </Button>
        <br></br>
        <p>
          Don't have an account?{" "}
          <Button
            onClick={() => setHasAccount(!hasAccount)}
            variant="warning fw-bold"
          >
            Sign Up
          </Button>
        </p>
      </>
    );
  } else {
    baton = (
      <>
        <Button onClick={handleSignUp} variant="warning fw-bold" type="submit">
          Sign Up
        </Button>
        <br></br>
        <p>
          Have an account?{" "}
          <Button
            onClick={() => setHasAccount(!hasAccount)}
            variant="warning fw-bold"
          >
            Book a tour!
          </Button>
        </p>
      </>
    );
  }

  return (
    <div
      className="d-flex justify-content-center text-warning fw-bold"
      style={style}
    >
      <div>
        <Image src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></Image>
      </div>
      <div>
        <Form className="p-5 m-2">
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            {/* <Form.Text>{emailError}</Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Destination</Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="fw-bold"
              >
                Choose a place
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Dhaka</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Chittagong</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cox's bazar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* <Form.Text>{passwordError}</Form.Text> */}
          </Form.Group>
          {baton}
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
