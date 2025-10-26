const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const adminExists = await User.findOne({
      email: "admin@improvemycity.com",
    });

    if (adminExists) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    const admin = await User.create({
      name: "Admin",
      email: "admin@improvemycity.com",
      password: "admin123",
      role: "admin",
    });

    console.log("Admin user created successfully:");
    console.log("Email: admin@improvemycity.com");
    console.log("Password: admin123");
    console.log("Please change the password after first login");

    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
