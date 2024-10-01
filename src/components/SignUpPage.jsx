import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      setLoading(true);
      const existingUser = await axios.get(`http://localhost:2000/users?email=${email}`);
      if (existingUser.data.length > 0) {
        setError('Email is already registered.');
      } else {
        await axios.post('http://localhost:2000/users', { email, password, role });
        navigate('/login');
      }
    } catch (error) {
      setError('Sign-up failed. Please try again.');
      console.error('Sign-up failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="container d-flex justify-content-center">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form className='p-4 border rounded shadow' onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role">Role</label>
                  <select
                    className="form-control"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
