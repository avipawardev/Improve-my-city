import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  ExternalLink,
} from "lucide-react";
import { theme } from "../theme/ThemeConfig";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Report an Issue", href: "/report" },
    { name: "Track Complaint", href: "/my-complaints" },
    { name: "Public Dashboard", href: "/public" },
    { name: "Service Status", href: "/status" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Open Data", href: "/open-data" },
    { name: "Site Map", href: "/sitemap" },
  ];

  return (
    <footer className="bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-secondary">
                    Improve My City
                  </h3>
                  <p className="text-blue-200 text-sm">City Services Portal</p>
                </div>
              </div>

              <p className="text-blue-100 mb-6 leading-relaxed">
                Making our community better, one issue at a time. Your voice
                matters in creating a cleaner, safer, and more beautiful city
                for everyone.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <motion.div
                  className="flex items-center text-blue-100 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 mr-3 text-blue-300" />
                  (555) 123-CITY
                </motion.div>
                <motion.div
                  className="flex items-center text-blue-100 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 mr-3 text-blue-300" />
                  support@improvecity.gov
                </motion.div>
              </div>
            </motion.div>

            {/* Legal & Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Information
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Emergency Contact */}
              <motion.div
                className="mt-6 p-4 bg-orange-600 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="font-semibold text-white mb-2">Emergency?</h5>
                <p className="text-orange-100 text-sm mb-3">
                  For life-threatening emergencies, call 911 immediately.
                </p>
                <a
                  href="tel:911"
                  className="inline-flex items-center text-white font-medium hover:text-orange-200 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 911
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-blue-800"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="flex items-center text-blue-200 text-sm mb-4 md:mb-0"
                whileHover={{ scale: 1.02 }}
              >
                <span>© 2025 Improve My City. All rights reserved.</span>
                <Heart className="w-4 h-4 mx-2 text-red-400" />
                <span>Made for our community</span>
              </motion.div>

              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <span>v2.1.0</span>
                <span>•</span>
                <span>Last updated: Oct 2025</span>
                <span>•</span>
                <a
                  href="/accessibility"
                  className="hover:text-white transition-colors duration-200"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accessibility Statement */}
        <motion.div className="bg-blue-950 py-3" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center text-blue-300 text-sm">
              <span>
                This site is committed to WCAG 2.1 AA accessibility standards
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-5"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full opacity-5"
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
