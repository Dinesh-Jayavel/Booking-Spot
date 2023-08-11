// RegisterForm.js
import "./register.css"
import React, { useState } from 'react';
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { username, email, password, country, phone, city });
      setMessage('User registered successfully!');
      setUsername('');
      setEmail('');
      setPassword('');
      setCountry('');
      setPhone('');
      setCity('');

    } catch (error) {
      setMessage('An error occurred while registering the user.');
      console.error(error);
    }
  };

  return (
    <div>
    <div className="navbar">
      <div className="navContainer">
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
    <span className="logo">Booking Spot</span>
  </Link>
  </div>
  </div>

    <div className="login">
      <div className="lContainer"> 
      <h2>Register Form</h2>
      <form onSubmit={handleRegister}>
        <div  className="field">
        <input type="text"
         placeholder="Username" 
         value={username} 
         onChange={(e) => setUsername(e.target.value)} 
         className="lInput"
         required />
         </div>

        <div  className="field">
        <input type="email"
         placeholder="Email"
         value={email} 
         onChange={(e) => setEmail(e.target.value)} 
         className="lInput"
         required />
         </div>

        <div  className="field">
        <input type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="lInput"
        required />
        </div>

        <div  className="field">
        <input type="country" 
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="lInput"
        required />
        </div>

        <div  className="field">
       <input type="city" 
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="lInput"
        required />
        </div>

        <div className="field">
        <input type="phone" 
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="lInput"
        required />
        </div>

        <button  type="submit" disabled={loading} className="lButton">
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
      </div> 
    </div>
    </div>
  );
};

export default RegisterForm;
