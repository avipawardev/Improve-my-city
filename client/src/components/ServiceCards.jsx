import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Car,
  Trash2,
  Droplets,
  Zap,
  Shield,
  Wrench,
  ArrowRight,
  CheckCircle,
  Clock,
  BarChart3,
  Star,
} from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      id: "roads",
      title: "Roads & Infrastructure",
      description:
        "Report potholes, damaged roads, traffic signals, and other infrastructure issues for faster resolution.",
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradient: "from-blue-500 to-blue-600",
      href: "/report?category=Roads",
    },
    {
      id: "sanitation",
      title: "Sanitation & Waste",
      description:
        "Report overflowing trash bins, illegal dumping, and sanitation concerns to keep our streets clean.",
      icon: Trash2,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradient: "from-green-500 to-green-600",
      href: "/report?category=Sanitation",
    },
    {
      id: "water",
      title: "Water Supply",
      description:
        "Report water leaks, low pressure, contaminated water, and drainage issues affecting your area.",
      icon: Droplets,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      gradient: "from-cyan-500 to-cyan-600",
      href: "/report?category=Water",
    },
    {
      id: "electricity",
      title: "Electricity",
      description:
        "Report power outages, faulty streetlights, and electrical hazards for immediate attention.",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      gradient: "from-yellow-500 to-yellow-600",
      href: "/report?category=Electricity",
    },
    {
      id: "safety",
      title: "Public Safety",
      description:
        "Report safety concerns, crime issues, and emergency situations to ensure community security.",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      gradient: "from-red-500 to-red-600",
      href: "/report?category=Public Safety",
    },
    {
      id: "other",
      title: "Other Services",
      description:
        "Report any other civic issues or general concerns that need municipal attention.",
      icon: Wrench,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradient: "from-purple-500 to-purple-600",
      href: "/report?category=Other",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      boxShadow:
        "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    },
  };

  const titleVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    hover: {
      x: 8,
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Choose Your Service Category
          </motion.div>

          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight font-primary"
          >
            What Issue Would You Like to Report?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Select the type of civic issue you're experiencing. We'll guide you
            through the reporting process and ensure your concern gets the
            attention it deserves.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <Link
                to={service.href}
                className="block h-full p-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                aria-label={`Report ${service.title.toLowerCase()} issue`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient
                      .split(" ")[0]
                      .replace("from-", "")}, ${service.gradient
                      .split(" ")[1]
                      .replace("to-", "")})`,
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 30px rgba(59, 130, 246, 0.1), 0 0 30px rgba(59, 130, 246, 0.1)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon with Glow */}
                  <motion.div
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {/* Icon Background Pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20"
                      style={{
                        background: `radial-gradient(circle, ${service.color.replace(
                          "text-",
                          ""
                        )} 0%, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <service.icon
                      className={`w-8 h-8 ${service.color} relative z-10`}
                    />
                  </motion.div>

                  {/* Animated Title */}
                  <motion.h3
                    className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight"
                    variants={titleVariants}
                    whileHover="hover"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-slate-600 mb-6 leading-relaxed text-sm lg:text-base group-hover:text-slate-700 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Enhanced CTA */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      Report Issue
                    </motion.span>
                    <motion.div
                      variants={arrowVariants}
                      whileHover="hover"
                      className="flex items-center"
                    >
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-all duration-200" />
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl shadow-xl border border-slate-200 p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-20 h-20 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-green-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Can't Find the Right Category?
              </h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                No problem! You can still report any civic issue using our
                general reporting form. Our team will categorize and route it
                appropriately.
              </p>
              <Link
                to="/report"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Report Any Issue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{
              y: -8,
              scale: 1.05,
              rotateY: 5,
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 font-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              98%
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Resolution Rate
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{
              y: -8,
              scale: 1.05,
              rotateY: -5,
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.1)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 10px rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Clock className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl lg:text-4xl font-bold text-green-600 mb-2 font-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              24hrs
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Average Response
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer"
            whileHover={{
              y: -8,
              scale: 1.05,
              rotateX: -5,
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(139, 69, 19, 0.1)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(139, 69, 19, 0.4)",
                    "0 0 0 10px rgba(139, 69, 19, 0)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <BarChart3 className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2 font-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              50K+
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              Issues Resolved
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer col-span-2 lg:col-span-1"
            whileHover={{
              y: -8,
              scale: 1.05,
              rotateY: 5,
              rotateX: 2,
              boxShadow:
                "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.1)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="flex items-center justify-center mb-3"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(249, 115, 22, 0.4)",
                    "0 0 0 10px rgba(249, 115, 22, 0)",
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
            <motion.div
              className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2 font-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              4.8/5
            </motion.div>
            <motion.div
              className="text-sm text-slate-600 font-medium"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              User Satisfaction
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
