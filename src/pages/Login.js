import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(data.email, data.password)) {
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue building awesome forms</p>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value, error: '' })}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value, error: '' })}
          />
          {error && <div className="login-error">{error}</div>}
          <button className="login-btn" type="submit">Login</button>
        </form>
        <div className="switch-link">
          New here? <span onClick={() => navigate('/register')} className="register-link">Create an Account</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

