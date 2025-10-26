import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Improve My City</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          {user ? (
            <>
              <Link to="/report" className="hover:underline">Report Issue</Link>
              <Link to="/my-complaints" className="hover:underline">My Complaints</Link>
              {user.role === 'admin' && <Link to="/admin" className="hover:underline">Admin</Link>}
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;