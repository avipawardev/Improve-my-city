import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Globe,
  User,
  LogOut,
  ChevronDown,
  MapPin,
  BarChart3,
  Info,
  FileText,
} from "lucide-react";
import AuthContext from "../context/AuthContext";
import { theme } from "../theme/ThemeConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Report Issue",
      href: "/report",
      icon: MapPin,
      description: "Submit a new complaint",
    },
    {
      name: "Track Complaint",
      href: "/my-complaints",
      icon: BarChart3,
      description: "Check status of your reports",
    },
    {
      name: "Dashboard",
      href: "/public",
      icon: BarChart3,
      description: "View public issue map",
    },
    {
      name: "About Us",
      href: "/about",
      icon: Info,
      description: "Learn about our services",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <span
                  className="text-lg lg:text-xl font-bold text-blue-900 block leading-tight"
                  style={{
                    fontFamily:
                      theme.typography.fontFamily.secondary.join(", "),
                  }}
                >
                  Improve My City
                </span>
                <div className="text-xs text-blue-600 -mt-1 hidden sm:block">
                  City Services Portal
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 lg:space-x-6 xl:space-x-8 flex-wrap">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative group flex-shrink-0"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-2 lg:px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm lg:text-base">{item.name}</span>
                  </Link>

                  {/* Dropdown */}
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            {/* Language Toggle */}
            <motion.button
              className="p-2 text-gray-600 hover:text-blue-700 transition-colors duration-200 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* User Menu */}
            {user ? (
              <div className="relative group flex-shrink-0">
                <motion.button
                  className="flex items-center space-x-2 px-2 lg:px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <User className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base truncate max-w-24 lg:max-w-none">
                    {user.name}
                  </span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </motion.button>

                <motion.div
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  initial={{ y: -10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-3 lg:px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium text-sm lg:text-base flex-shrink-0"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-gray-600 hover:text-blue-700 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>

              {/* Mobile Nav Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 px-3 py-2">
                      <User className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">
                        {user.name}
                      </span>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-3 bg-blue-700 text-white rounded-lg text-center font-medium hover:bg-blue-800 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
