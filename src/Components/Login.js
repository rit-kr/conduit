import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useState, useEffect } from "react";
// const baseUrl = process.env.REACT_APP_BASE_URL;

export default function Login(props) {

    const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info') !== null) {
    //         console.log("userInfo", localStorage.getItem('user-info'))
    //         navigate("/add");
    //     }
    // }, [props.user]);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        const body = {
            user: {
                email,
                password
            }
        }
        let response = await fetch(`https://api.realworld.io/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            },
            body: JSON.stringify(body),
        });

        let responseData = await response.json();
        console.log("login", responseData);
        props.addUser(responseData);
        localStorage.setItem('userInfo', JSON.stringify(responseData));
        navigate("/add");

    }

    return (
        <div className="login">
            <h3>Sign In</h3>
            <NavLink className='px-4' to="/register">Need a account</NavLink>
            <div>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <Button onClick={handleLogin} >Login</Button>
            </div>
        </div>
    );
}