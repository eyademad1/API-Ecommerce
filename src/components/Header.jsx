import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import UserContext from '../context/UserContext';

const Header = () => {
    const { user } = useContext(UserContext); 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid py-2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink className="navbar-brand me-auto fw-bold" to="/">PROD MART</NavLink>

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        {/* Conditionally render Dashboard link if user is admin */}
                        {user && user.role === 'admin' && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>
                        )}
                    </ul>

                    {/* Conditional rendering for logged in user */}
                    {user ? (
                        <div className="d-flex align-items-center badge rounded-pill text-bg-primary p-2">
                            <span className="fa fa-user me-1"></span> {/* User Icon */}
                            <span className="fw-bold">{user.role}</span> {/* Display user role (Admin or User) */}
                        </div>
                    ) : (
                        
                        // If no user is logged in, show login and signup buttons
                        <>
                            <Login />
                            <Signup />
                        </>
                    )}

                    <CartBtn />
                </div>
            </div>
        </nav>
    );
};

export default Header;
