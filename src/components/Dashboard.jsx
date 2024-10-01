import React, {useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:2000/users');
      setUsers(response.data); 
    } catch (err) {
      setError('Error fetching users.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/users/${id}`);
      setUsers(users.filter(user => user.id !== id)); 
    } catch (err) {
      setError('Error deleting user.');
    }
  };

  const renderUserRow = (user) => (
    <tr key={user.id}>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <div className="dashboard-container d-flex align-items-center justify-content-center" style={{ height: '100vh', background: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Admin Dashboard</h1>
            <hr />
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <table className="table table-bordered" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: "white" }}>
          <thead>
            <tr>
              <th>User Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(renderUserRow)
            ) : (
              <tr>
                <td colSpan="3">No users available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
