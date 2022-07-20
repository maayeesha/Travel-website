import React from 'react';
import { Form, Button, Container, Row, Col ,Dropdown} from 'react-bootstrap';
const Login = () => {
  return (
    <Container>
      <form>
      <label>First Name
        <input type="text" />
      </label>
    
      <label>Last Name
        <input type="text" />
      </label>
    <br></br>
      <label>Destination
        <input type="text" />
      </label>
      <label>Tour type
        <input type="text" />
      </label>
      <br></br>
      <label>Email
        <input type="email" />
      </label>
      <label>Password
        <input type="password" />
      </label>
    </form>
    </Container>
  );
};

export default Login;