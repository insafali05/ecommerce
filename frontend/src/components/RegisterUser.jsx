import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/register', { ...form, role: 'user' });
      alert('User registered successfully');
    } catch (err) {
      alert('Error during registration');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>User Register</h3>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <br />
      <button type="submit">Register as User</button>
    </form>
  );
};

export default RegisterUser;
