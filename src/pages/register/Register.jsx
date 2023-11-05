import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [message,setMessage]= useState('')
  const navigate= useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/register', user);
      // Registration success, redirect or display a success message
      // You can decide how to handle a successful registration.
      console.log("registerresponse",response)
      setMessage(response.data)
      navigate("/login")

    } catch (error) {
      // Handle registration failure, e.g., duplicate email
      console.log("registererror",error.response.data.message)
      setError(error.response.data.message)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for username, email, and password */}
        {/* ... */}
        <input type="text"  
        placeholder='username'
        name='username'
        onChange={handleChange}
        />
        <input type="email"  
        placeholder='email'
        name='email'
        onChange={handleChange}
        />
        <input type="password"  
        placeholder='password'
        name='password'
        onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>

      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      
    </div>
  );
};

export default RegistrationForm;
