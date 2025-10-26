import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import FormBuilder from './pages/FormBuilder';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/form-builder"
            element={
              <ProtectedRoute>
                <FormBuilder />
              </ProtectedRoute>
            }
          />
          {/* Fallback route */}
          <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Page Not Found</h2>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
