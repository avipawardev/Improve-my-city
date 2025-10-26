import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Image as ImageIcon,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const ComplaintCard = ({ complaint }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case "Pending":
        return {
          color: "bg-yellow-500",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          icon: Clock,
          textColor: "text-yellow-800",
        };
      case "In Progress":
        return {
          color: "bg-blue-500",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          icon: AlertCircle,
          textColor: "text-blue-800",
        };
      case "Resolved":
        return {
          color: "bg-green-500",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          icon: CheckCircle,
          textColor: "text-green-800",
        };
      case "Rejected":
        return {
          color: "bg-red-500",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          icon: XCircle,
          textColor: "text-red-800",
        };
      default:
        return {
          color: "bg-gray-500",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          icon: AlertCircle,
          textColor: "text-gray-800",
        };
    }
  };

  const statusConfig = getStatusConfig(complaint.status);
  const StatusIcon = statusConfig.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`bg-white rounded-xl shadow-lg border-2 ${statusConfig.borderColor} overflow-hidden hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Status Banner */}
      <div
        className={`${statusConfig.bgColor} px-4 py-3 border-b ${statusConfig.borderColor}`}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <StatusIcon className={`w-5 h-5 ${statusConfig.textColor}`} />
          </motion.div>
          <span className={`font-semibold ${statusConfig.textColor}`}>
            {complaint.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-3 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {complaint.title}
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {complaint.description}
        </motion.p>

        {/* Image */}
        {complaint.images && complaint.images.length > 0 && (
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="mb-4 relative group"
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={complaint.images[0]}
                alt="Complaint"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          className="flex items-center justify-between pt-4 border-t border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
          </div>

          {complaint.location && (
            <motion.div
              className="flex items-center space-x-1 text-gray-500 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated border effect */}
      <motion.div
        className={`h-1 ${statusConfig.color}`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default ComplaintCard;
