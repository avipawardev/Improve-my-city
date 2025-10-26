import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Search, Cloud, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { theme } from "../theme/ThemeConfig";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const CityIllustration = () => (
    <svg
      viewBox="0 0 1200 600"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="50%" stopColor="#B3E5FC" />
          <stop offset="100%" stopColor="#81D4FA" />
        </linearGradient>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <filter id="blurBuildings">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1200" height="600" fill="url(#skyGradient)" />

      {/* Animated Clouds */}
      <motion.g
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="200" cy="80" r="30" fill="white" opacity="0.7" />
        <circle cx="230" cy="75" r="35" fill="white" opacity="0.7" />
        <circle cx="260" cy="80" r="30" fill="white" opacity="0.7" />

        <circle cx="600" cy="60" r="25" fill="white" opacity="0.8" />
        <circle cx="625" cy="55" r="30" fill="white" opacity="0.8" />
        <circle cx="650" cy="60" r="25" fill="white" opacity="0.8" />

        <circle cx="900" cy="90" r="28" fill="white" opacity="0.6" />
        <circle cx="930" cy="85" r="35" fill="white" opacity="0.6" />
        <circle cx="960" cy="90" r="28" fill="white" opacity="0.6" />
      </motion.g>

      {/* Animated Birds */}
      <motion.g
        animate={{
          x: [0, 20, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="300" cy="120" r="3" fill="#37474F" opacity="0.6" />
        <circle cx="310" cy="118" r="2" fill="#37474F" opacity="0.6" />
        <circle cx="750" cy="100" r="3" fill="#37474F" opacity="0.5" />
        <circle cx="760" cy="98" r="2" fill="#37474F" opacity="0.5" />
        <circle cx="1050" cy="110" r="3" fill="#37474F" opacity="0.7" />
        <circle cx="1060" cy="108" r="2" fill="#37474F" opacity="0.7" />
      </motion.g>

      {/* Buildings - Back layer (blurred) */}
      <g filter="url(#blurBuildings)" opacity="0.4">
        <motion.rect
          x="150"
          y="250"
          width="60"
          height="180"
          fill="url(#buildingGradient)"
          animate={{ y: [250, 245, 250] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="230"
          y="220"
          width="50"
          height="210"
          fill="url(#buildingGradient)"
          animate={{ y: [220, 225, 220] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.rect
          x="300"
          y="200"
          width="70"
          height="230"
          fill="url(#buildingGradient)"
          animate={{ y: [200, 195, 200] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </g>

      {/* Buildings - Middle layer */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect
          x="400"
          y="180"
          width="80"
          height="250"
          fill="url(#buildingGradient)"
        />
        <rect
          x="500"
          y="160"
          width="65"
          height="270"
          fill="url(#buildingGradient)"
          opacity="0.9"
        />
        <rect
          x="585"
          y="140"
          width="90"
          height="290"
          fill="url(#buildingGradient)"
        />
      </motion.g>

      {/* Buildings - Front layer */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <rect
          x="700"
          y="200"
          width="75"
          height="230"
          fill="url(#buildingGradient)"
          opacity="0.95"
        />
        <rect
          x="795"
          y="180"
          width="85"
          height="250"
          fill="url(#buildingGradient)"
        />
        <rect
          x="900"
          y="160"
          width="70"
          height="270"
          fill="url(#buildingGradient)"
          opacity="0.9"
        />
      </motion.g>

      {/* Buildings - Right side */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <rect
          x="1000"
          y="220"
          width="60"
          height="210"
          fill="url(#buildingGradient)"
          opacity="0.85"
        />
        <rect
          x="1070"
          y="200"
          width="80"
          height="230"
          fill="url(#buildingGradient)"
        />
        <rect
          x="1160"
          y="180"
          width="70"
          height="250"
          fill="url(#buildingGradient)"
          opacity="0.9"
        />
      </motion.g>

      {/* Windows on buildings */}
      <g opacity="0.8">
        <g>
          <rect
            x="415"
            y="200"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="435"
            y="200"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="455"
            y="200"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="475"
            y="200"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
        </g>
        <g>
          <rect
            x="715"
            y="220"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="735"
            y="220"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="755"
            y="220"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="775"
            y="220"
            width="8"
            height="12"
            fill="white"
            opacity="0.9"
          />
        </g>
      </g>

      {/* Road with gradient */}
      <defs>
        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#424242" />
          <stop offset="100%" stopColor="#212121" />
        </linearGradient>
      </defs>
      <rect x="0" y="430" width="1200" height="100" fill="url(#roadGradient)" />

      {/* Road markings */}
      <g opacity="0.9">
        {Array.from({ length: 24 }, (_, i) => (
          <rect
            key={i}
            x={i * 50}
            y="478"
            width="30"
            height="4"
            fill="white"
            opacity="0.8"
          />
        ))}
      </g>

      {/* Animated cars */}
      <motion.g
        animate={{
          x: [-100, 1300],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <rect x="0" y="450" width="35" height="16" fill="#FF6B35" rx="3" />
        <rect x="8" y="445" width="20" height="10" fill="#263238" rx="2" />
        <circle cx="12" cy="470" r="4" fill="#37474F" />
        <circle cx="23" cy="470" r="4" fill="#37474F" />
      </motion.g>

      <motion.g
        animate={{
          x: [-150, 1350],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      >
        <rect x="0" y="455" width="28" height="14" fill="#1976D2" rx="2" />
        <rect x="6" y="450" width="16" height="8" fill="#0D47A1" rx="1" />
        <circle cx="10" cy="472" r="3" fill="#263238" />
        <circle cx="18" cy="472" r="3" fill="#263238" />
      </motion.g>

      {/* Wave divider between skyline and road */}
      <path
        d="M0,430 Q300,410 600,430 T1200,430 L1200,600 L0,600 Z"
        fill="url(#roadGradient)"
        opacity="0.3"
      />

      {/* Ground with subtle gradient */}
      <rect
        x="0"
        y="430"
        width="1200"
        height="170"
        fill="url(#skyGradient)"
        opacity="0.2"
      />
    </svg>
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0 opacity-90">
        <CityIllustration />
      </div>

      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-blue-50/30 z-5"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight tracking-tight font-primary"
          variants={itemVariants}
          style={{
            background:
              "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          HOW CAN WE HELP YOU TODAY?
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light font-primary"
          variants={itemVariants}
        >
          Your voice matters in building a better community. Report civic
          issues, track progress, and help create positive change together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/report"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform"
              aria-label="Report a new civic issue"
            >
              <MapPin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Report an Issue
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/my-complaints"
              className="group inline-flex items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200"
              aria-label="Track your existing complaints"
            >
              <Search className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Track Complaint
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Section with Glassmorphism */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{
              y: -10,
              scale: 1.08,
              rotateY: 10,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.2)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(59, 130, 246, 0.3)",
                    "0 4px 25px rgba(59, 130, 246, 0.6)",
                    "0 4px 15px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-slate-800 mb-1 font-primary"
              whileHover={{
                scale: 1.1,
                color: "#2563eb",
              }}
              transition={{ duration: 0.3 }}
            >
              3,247
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Issues Reported
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{
              y: -10,
              scale: 1.08,
              rotateY: -10,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.2)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(34, 197, 94, 0.3)",
                    "0 4px 25px rgba(34, 197, 94, 0.6)",
                    "0 4px 15px rgba(34, 197, 94, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Search className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-slate-800 mb-1 font-primary"
              whileHover={{
                scale: 1.1,
                color: "#16a34a",
              }}
              transition={{ duration: 0.3 }}
            >
              2,183
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Issues Resolved
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{
              y: -10,
              scale: 1.08,
              rotateX: -8,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.2)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 4px 15px rgba(249, 115, 22, 0.3)",
                    "0 4px 25px rgba(249, 115, 22, 0.6)",
                    "0 4px 15px rgba(249, 115, 22, 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Cloud className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl font-bold text-slate-800 mb-1 font-primary"
              whileHover={{
                scale: 1.1,
                color: "#ea580c",
              }}
              transition={{ duration: 0.3 }}
            >
              98.5%
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Satisfaction Rate
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-8 h-14 border-2 border-slate-600 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-4 bg-slate-600 rounded-full mt-3"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
