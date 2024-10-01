import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {
  return (
    <div className="container notFound text-center">
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
