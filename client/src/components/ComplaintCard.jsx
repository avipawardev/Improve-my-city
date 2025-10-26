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
      y: -8,
      scale: 1.02,
      rotateX: 3,
      boxShadow:
        "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
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
      <motion.div
        className={`${statusConfig.bgColor} px-4 py-3 border-b ${statusConfig.borderColor} relative overflow-hidden`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              `linear-gradient(45deg, ${statusConfig.color.replace(
                "bg-",
                ""
              )}20, transparent)`,
              `linear-gradient(135deg, ${statusConfig.color.replace(
                "bg-",
                ""
              )}20, transparent)`,
              `linear-gradient(225deg, ${statusConfig.color.replace(
                "bg-",
                ""
              )}20, transparent)`,
              `linear-gradient(315deg, ${statusConfig.color.replace(
                "bg-",
                ""
              )}20, transparent)`,
              `linear-gradient(45deg, ${statusConfig.color.replace(
                "bg-",
                ""
              )}20, transparent)`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="flex items-center space-x-2 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <StatusIcon className={`w-5 h-5 ${statusConfig.textColor}`} />
          </motion.div>
          <motion.span
            className={`font-semibold ${statusConfig.textColor}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {complaint.status}
          </motion.span>
        </div>
      </motion.div>

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
            className="mb-4 relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={complaint.images[0]}
                alt="Complaint"
                className="w-full h-48 object-cover transition-transform duration-500"
                whileHover={{
                  scale: 1.1,
                  filter: "brightness(1.1) contrast(1.05)",
                }}
                transition={{ duration: 0.5 }}
              />
              {/* Overlay effects */}
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </motion.div>
              </motion.div>
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-white/0 group-hover:border-white/30"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
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
          <motion.div
            className="flex items-center space-x-1 text-gray-500 text-sm"
            whileHover={{ scale: 1.05, x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-4 h-4" />
            </motion.div>
            <span>{new Date(complaint.createdAt).toLocaleDateString()}</span>
          </motion.div>

          {complaint.location && (
            <motion.div
              className="flex items-center space-x-1 text-gray-500 text-sm"
              whileHover={{
                scale: 1.05,
                x: -2,
                color: "#3b82f6",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: -10 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4" />
              </motion.div>
              <span>Location</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated border effect */}
      <motion.div
        className={`h-1 ${statusConfig.color} relative overflow-hidden`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ComplaintCard;
