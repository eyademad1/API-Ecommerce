import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:2000/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        setUser(response.data[0]); 
        if (response.data[0].role === 'admin' || response.data[0].role === 'user') {
          navigate('/');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">

    <div className="container d-flex justify-content-center" style={{ height: '100vh' }}>
      <div className="col-md-4">
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
        <form onSubmit={handleLogin} className="p-4 border rounded shadow">
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="text-center mt-3">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
