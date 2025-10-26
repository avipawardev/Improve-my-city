import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  MapPin,
  Upload,
  Camera,
  Send,
  X,
  CheckCircle,
  Loader,
} from "lucide-react";
import ComplaintContext from "../context/ComplaintContext";
import Navbar from "../components/Navbar";
import MapComponent from "../components/MapComponent";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Other",
    location: "",
    images: null,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { createComplaint } = useContext(ComplaintContext);
  const navigate = useNavigate();

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    // Reverse geocode to get address
    if (window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location }, (results, status) => {
        if (status === "OK" && results[0]) {
          setFormData({ ...formData, location: results[0].formatted_address });
        }
      });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });

    // Create image previews
    const previews = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImagePreviews(previews);
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);

    if (selectedLocation) {
      data.append(
        "location",
        JSON.stringify({
          address: formData.location,
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        })
      );
    }

    if (formData.images) {
      for (let i = 0; i < formData.images.length; i++) {
        data.append("images", formData.images[i]);
      }
    }

    try {
      await createComplaint(data);
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate("/my-complaints");
      }, 2000);
    } catch (error) {
      alert(
        "Failed to report issue: " +
          (error.response?.data?.message || error.message)
      );
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const categories = [
    { value: "Roads", label: "Roads & Infrastructure", icon: "🛣️" },
    { value: "Sanitation", label: "Sanitation & Waste", icon: "🗑️" },
    { value: "Water", label: "Water Supply", icon: "💧" },
    { value: "Electricity", label: "Electricity", icon: "⚡" },
    { value: "Public Safety", label: "Public Safety", icon: "🚔" },
    { value: "Other", label: "Other Issues", icon: "📋" },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <motion.div
          className="text-center bg-white p-12 rounded-2xl shadow-2xl max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Issue Reported!
          </h2>
          <p className="text-gray-600 mb-6">
            Your complaint has been successfully submitted. We'll review it and
            update you on the progress.
          </p>
          <motion.div
            className="w-full bg-green-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <AlertTriangle className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Report an Issue
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help improve your community by reporting civic issues. Your voice
              matters!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Issue Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Brief description of the issue"
                    required
                  />
                </motion.div>

                {/* Category */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Category *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <motion.button
                        key={cat.value}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, category: cat.value })
                        }
                        className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                          formData.category === cat.value
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-2xl mb-2 block">{cat.icon}</span>
                        <span className="font-medium">{cat.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Detailed Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                    rows="4"
                    placeholder="Please provide as much detail as possible about the issue..."
                    required
                  />
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Click on map or enter address manually"
                    />
                  </div>
                </motion.div>

                {/* Images */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Photos (Optional)
                  </label>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="file"
                        name="images"
                        onChange={handleImageChange}
                        multiple
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-colors cursor-pointer bg-gray-50 hover:bg-blue-50"
                      >
                        <div className="text-center">
                          <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600 font-medium">
                            Click to upload images
                          </p>
                          <p className="text-sm text-gray-500">
                            PNG, JPG up to 10MB each
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Image Previews */}
                    {imagePreviews.length > 0 && (
                      <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {imagePreviews.map((preview, index) => (
                          <motion.div
                            key={index}
                            className="relative group"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <img
                              src={preview.url}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Report Issue</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  Select Location
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Click on the map to pinpoint the exact location of the issue
                </p>
              </div>
              <div className="h-96">
                <MapComponent
                  onLocationSelect={handleLocationSelect}
                  initialLocation={selectedLocation}
                />
              </div>
              {selectedLocation && (
                <motion.div
                  className="p-4 bg-green-50 border-t border-green-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">
                      Location selected
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReportIssue;
