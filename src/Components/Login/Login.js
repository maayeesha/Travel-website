import React from "react";
const Login = () => {
  const style = {
    backgroundImage:
      "url('https://thumbs.dreamstime.com/b/sunset-tropical-beach-palm-trees-sea-summer-resort-background-vector-illustration-sunset-tropical-beach-palm-217475782.jpg') ",
    color: 'black',
  };

  const st = {color : 'black', fontWeight: 'bolder', fontSize : 'largest'}
  const stt = {color : 'white', fontWeight: 'bolder', fontSize : 'largest', backgroundColor: "#000000"}
  const pp = {background: 'transparent' }


  return (
    <div style={style}>
      <from className="frm">
        <br></br>
        <lebel for="name" style = {st}> Name : </lebel>
        <br></br>
        <input
          type="text"
          id="name"
          class="name"
          style = {pp}
          size="55"
          placeholder="  Enter Your Name"
        />

        <br />
        <lebel for="name" style = {st}>
          {" "}
          Email :{" "}
        </lebel>
        <br></br>
        <input
          type="email"
          id="name"
          className="name"
          size="55"
          placeholder="  Enter E-mail address"
        />
        <br />
        <lebel for="name" style = {st}>
          {" "}
          Password :{" "}
        </lebel>
        <br></br>
        <input
          type="password"
          id="name"
          className="name"
          size="55"
          placeholder="  Enter Your Password"
        />
        <br />
        <br></br>
        <br></br>

        <lebel style = {st}>Destination</lebel>
        <br />
        <select id="Course" style={stt}>
          <option>--Select One--</option>
          <option>Cox's Bazar</option>
          <option>Gaur</option>
          <option>Inani Beach</option>
          <option>Jaflong</option>
          <option>Kuakata Sea Beach</option>
          <option>Mainamati</option>
          <option>Paharpur</option>
          <option>Rangamati</option>
          <option>Sajek Valley</option>
          <option>Sundarbans</option>
        </select>
        <br />
        <br></br>
        <br></br>

        <label style = {st}>Transport</label>
        <br></br>
        <input type="radio" id="rad" name="sos" class="rad" value="male" />
        <label for="rad" style = {st}>
          Bus
        </label>
        <span>🚌 </span>
        <input type="radio" id="rad" name="sos" class="rad" value="female" />
        <label for="rad" style = {st}>
          Train
        </label>
        <span>🚄 </span>
        <input type="radio" id="rad" name="sos" class="rad" value="female" />
        <label for="rad" style = {st}>
          Plane
        </label>
        <span>✈️ </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </from>
    </div>
  );
};

export default Login;
