import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
// const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Register() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  console.log();

   const handleRegister = () => {
    const body = {
      user: {
        username,
        email,
        password
      }
    }
      fetch(`https://api.realworld.io/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": 'application/json'
        },
        body: JSON.stringify(body),
      }).then((res) => res.json())
      .then((data) => data);
    // result = result.json(),
    }


  return (
    <div className="register">
      {/* <Header /> */}

      <h3>Register</h3>
      <NavLink className='px-4' to="/login">Have a account</NavLink>

      <div>
        <input type="text" onClick={(e) => setUserName(e.target.value)} placeholder="User name"></input>
        <input type="email" onClick={(e) => setEmail(e.target.value)} placeholder="Email"></input>
        <input type="passport" onClick={(e) => setPassword(e.target.value)} placeholder="Passport"></input>
        <Button onClick={handleRegister} >Register</Button>
      </div>
    </div>
  );
}