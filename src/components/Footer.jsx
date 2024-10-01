import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id orci nec est dictum hendrerit.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="text-light">Home</NavLink></li>
              <li><NavLink to="/about" className="text-light">About</NavLink></li>
              <li><NavLink to="/products" className="text-light">Product</NavLink></li>
              <li><NavLink to="/contact" className="text-light">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt"></i> 123 Main Street, Anytown, USA</li>
              <li><i className="bi bi-envelope"></i> email@example.com</li>
              <li><i className="bi bi-telephone"></i> (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3 border-top border-light">
        &copy; {new Date().getFullYear()} Company All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
