import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
// const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Update(props) {
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [image, setImage] = useState();

  console.log("token", props.user.user.token);
  const handleUpdateDetails = async () => {
    const body = {
      user: {
        email,
        bio,
        image
      }
    }
    let response = await fetch(`https://api.realworld.io/api/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        Authorization: `Token ${props.user.user.token}`,
      },
      body: JSON.stringify(body),
    });

    let responseData = await response.json();
    props.updateUser(responseData);

    console.log(responseData);
  }
  return (
    <div className="register">
      {/* <Header /> */}
      <h3>Update Details</h3>
      <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
        <input type="bio" onChange={(e) => setBio(e.target.value)} placeholder="Bio"></input>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Add file"></input>
        <Button onClick={handleUpdateDetails} >Update</Button>
      </div>
    </div>
  );
}