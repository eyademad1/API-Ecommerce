import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/LoginPage';
import SignUp from './components/SignUpPage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
    <ErrorBoundary>
    <UserProvider>
      
      <Routes>
        <Route path="/" element={<><Header/><Home /><Footer /></>} />
        <Route path="/products" element={<><Header/><Product /><Footer /></>} />
        <Route path="/products/:id" element={<><Header/><ProductDetail /><Footer /></>} />
        <Route path="/cart" element={<><Header/><Cart /><Footer /></>} />
        <Route path="/about" element={<><Header/><About /><Footer /></>} />
        <Route path="/contact" element={<><Header/><Contact /><Footer /></>} />
        <Route path="/dashboard" element={<><Header/><Dashboard /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </UserProvider>
    </ErrorBoundary>
    </>
  );
}

export default App;
