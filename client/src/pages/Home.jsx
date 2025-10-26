import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <HeroSection />

      <ServiceCards />

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
