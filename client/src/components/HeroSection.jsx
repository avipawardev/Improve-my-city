import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { theme, getButtonStyles } from "../theme/ThemeConfig";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const CityIllustration = () => (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F6FF" />
        </linearGradient>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#005BAC" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="400" fill="url(#skyGradient)" />

      {/* Clouds */}
      <motion.g
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="150" cy="80" r="25" fill="white" opacity="0.8" />
        <circle cx="175" cy="75" r="30" fill="white" opacity="0.8" />
        <circle cx="200" cy="80" r="25" fill="white" opacity="0.8" />

        <circle cx="450" cy="60" r="20" fill="white" opacity="0.8" />
        <circle cx="470" cy="55" r="25" fill="white" opacity="0.8" />
        <circle cx="490" cy="60" r="20" fill="white" opacity="0.8" />

        <circle cx="650" cy="90" r="22" fill="white" opacity="0.8" />
        <circle cx="675" cy="85" r="28" fill="white" opacity="0.8" />
        <circle cx="700" cy="90" r="22" fill="white" opacity="0.8" />
      </motion.g>

      {/* Buildings - Back layer */}
      <rect
        x="50"
        y="200"
        width="40"
        height="120"
        fill="url(#buildingGradient)"
        opacity="0.7"
      />
      <rect
        x="100"
        y="180"
        width="35"
        height="140"
        fill="url(#buildingGradient)"
        opacity="0.8"
      />
      <rect
        x="145"
        y="160"
        width="45"
        height="160"
        fill="url(#buildingGradient)"
        opacity="0.6"
      />

      {/* Buildings - Middle layer */}
      <rect
        x="200"
        y="140"
        width="50"
        height="180"
        fill="url(#buildingGradient)"
      />
      <rect
        x="260"
        y="120"
        width="40"
        height="200"
        fill="url(#buildingGradient)"
        opacity="0.9"
      />
      <rect
        x="310"
        y="100"
        width="55"
        height="220"
        fill="url(#buildingGradient)"
      />

      {/* Buildings - Front layer */}
      <rect
        x="380"
        y="160"
        width="45"
        height="160"
        fill="url(#buildingGradient)"
        opacity="0.8"
      />
      <rect
        x="435"
        y="140"
        width="50"
        height="180"
        fill="url(#buildingGradient)"
      />
      <rect
        x="495"
        y="120"
        width="40"
        height="200"
        fill="url(#buildingGradient)"
        opacity="0.9"
      />

      {/* Buildings - Right side */}
      <rect
        x="550"
        y="180"
        width="35"
        height="140"
        fill="url(#buildingGradient)"
        opacity="0.7"
      />
      <rect
        x="595"
        y="160"
        width="45"
        height="160"
        fill="url(#buildingGradient)"
        opacity="0.8"
      />
      <rect
        x="650"
        y="140"
        width="40"
        height="180"
        fill="url(#buildingGradient)"
      />

      {/* Windows on buildings */}
      <g opacity="0.6">
        {/* Building 1 windows */}
        <rect x="210" y="150" width="6" height="8" fill="white" />
        <rect x="225" y="150" width="6" height="8" fill="white" />
        <rect x="240" y="150" width="6" height="8" fill="white" />
        <rect x="210" y="170" width="6" height="8" fill="white" />
        <rect x="225" y="170" width="6" height="8" fill="white" />
        <rect x="240" y="170" width="6" height="8" fill="white" />

        {/* Building 2 windows */}
        <rect x="445" y="150" width="6" height="8" fill="white" />
        <rect x="460" y="150" width="6" height="8" fill="white" />
        <rect x="475" y="150" width="6" height="8" fill="white" />
        <rect x="445" y="170" width="6" height="8" fill="white" />
        <rect x="460" y="170" width="6" height="8" fill="white" />
        <rect x="475" y="170" width="6" height="8" fill="white" />
      </g>

      {/* Road */}
      <rect x="0" y="320" width="800" height="80" fill="#374151" />

      {/* Road markings */}
      <g opacity="0.8">
        <rect x="0" y="358" width="50" height="4" fill="white" />
        <rect x="70" y="358" width="50" height="4" fill="white" />
        <rect x="140" y="358" width="50" height="4" fill="white" />
        <rect x="210" y="358" width="50" height="4" fill="white" />
        <rect x="280" y="358" width="50" height="4" fill="white" />
        <rect x="350" y="358" width="50" height="4" fill="white" />
        <rect x="420" y="358" width="50" height="4" fill="white" />
        <rect x="490" y="358" width="50" height="4" fill="white" />
        <rect x="560" y="358" width="50" height="4" fill="white" />
        <rect x="630" y="358" width="50" height="4" fill="white" />
        <rect x="700" y="358" width="50" height="4" fill="white" />
        <rect x="770" y="358" width="50" height="4" fill="white" />
      </g>

      {/* Animated car */}
      <motion.g
        animate={{
          x: [-50, 850],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <rect x="0" y="340" width="25" height="12" fill="#FF6B35" rx="2" />
        <rect x="5" y="335" width="15" height="8" fill="#374151" rx="1" />
        <circle cx="8" cy="355" r="3" fill="#1f2937" />
        <circle cx="17" cy="355" r="3" fill="#1f2937" />
      </motion.g>

      {/* Ground */}
      <rect
        x="0"
        y="320"
        width="800"
        height="80"
        fill="#10B981"
        opacity="0.3"
      />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        <CityIllustration />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight"
          variants={itemVariants}
          style={{
            fontFamily: theme.typography.fontFamily.secondary.join(", "),
          }}
        >
          HOW CAN WE HELP YOU TODAY?
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-blue-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Report or track a city issue now. Your voice helps make our community
          better.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Link to="/report" className={getButtonStyles("primary")}>
            <MapPin className="w-5 h-5 mr-2" />
            Report an Issue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <Link to="/my-complaints" className={getButtonStyles("secondary")}>
            <Search className="w-5 h-5 mr-2" />
            Track Complaint
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-blue-900">2,847</div>
            <div className="text-sm text-blue-700">Issues Reported</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-blue-900">1,923</div>
            <div className="text-sm text-blue-700">Issues Resolved</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-blue-900">98%</div>
            <div className="text-sm text-blue-700">Satisfaction Rate</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-700 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
