import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    // "mongodb://mongodb:27017/users"
    //  mongodb://localhost:27017/api
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
