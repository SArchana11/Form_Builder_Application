import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import './Register.css';

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(data.name, data.email, data.password);
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="register-btn" type="submit">Register</button>
        </form>
        {/* Footer inside the register box */}
        
      </div>
      <Footer />
    </div>
  );
};

export default Register;
