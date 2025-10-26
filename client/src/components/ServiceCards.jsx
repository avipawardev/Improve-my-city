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
} from "lucide-react";
import { getCardStyles } from "../theme/ThemeConfig";

const ServiceCards = () => {
  const services = [
    {
      id: "roads",
      title: "Roads & Infrastructure",
      description:
        "Report potholes, damaged roads, traffic signals, and other infrastructure issues.",
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      href: "/report?category=Roads",
    },
    {
      id: "sanitation",
      title: "Sanitation & Waste",
      description:
        "Report overflowing trash bins, illegal dumping, and sanitation concerns.",
      icon: Trash2,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      href: "/report?category=Sanitation",
    },
    {
      id: "water",
      title: "Water Supply",
      description:
        "Report water leaks, low pressure, contaminated water, and drainage issues.",
      icon: Droplets,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      href: "/report?category=Water",
    },
    {
      id: "electricity",
      title: "Electricity",
      description:
        "Report power outages, faulty streetlights, and electrical hazards.",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      href: "/report?category=Electricity",
    },
    {
      id: "safety",
      title: "Public Safety",
      description:
        "Report safety concerns, crime issues, and emergency situations.",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      href: "/report?category=Public Safety",
    },
    {
      id: "other",
      title: "Other Services",
      description: "Report any other civic issues or general concerns.",
      icon: Wrench,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
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
      y: -8,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose a Service Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the type of issue you'd like to report. We'll guide you
            through the process and help get your concern addressed quickly.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className={`${getCardStyles()} group cursor-pointer overflow-hidden`}
            >
              <Link to={service.href} className="block h-full">
                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-200`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                    <span>Report Issue</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={false}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find the right category?
            </h3>
            <p className="text-gray-600 mb-6">
              No problem! You can still report any civic issue using our general
              reporting form. Our team will categorize and route it
              appropriately.
            </p>
            <Link
              to="/report"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Report Any Issue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Resolution Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24hrs</div>
            <div className="text-gray-600">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Issues Resolved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8/5</div>
            <div className="text-gray-600">User Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
