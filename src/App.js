
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';
import Update from './Components/Update';
import Home from './Components/Home';
import Protect from './Components/Protect';



export default function App() {
  const[user, setUser] = useState(null);
  const navigate = useNavigate();
  const addUser = (userDetails) => {
    setUser(userDetails);
  }
  const updateUser = (userDetails) => {
    console.log("userUpdate", userDetails)
    setUser({...user, email:userDetails.user.email, bio:userDetails.user.bio });
  }
  const removeUser = () => {
    setUser(null);
    localStorage.clear();
    navigate('/login')
  }
  console.log("userDetails", user);
  // useEffect(() => {
  //   localStorage.setItem("userInfo", JSON.stringify(user));
  // },[user]);
  
  useEffect(() => {
    let localsStoreData = localStorage.getItem("userInfo");
    console.log(localsStoreData);
    setUser(JSON.parse(localsStoreData));
  },[]);


  return (
    <>
      <div className="App">
        <Header removeUser= {removeUser}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/add' element={<Product />}/>
          <Route path='/update' element={<Update user={user} updateUser={updateUser}/>} />
          <Route path='/login' element={<Login user={user} addUser={addUser}/>} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}


