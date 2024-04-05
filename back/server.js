import dotenv from "dotenv";
dotenv.config();
import express from "express";

const PORT = process.env.PORT || 8080;
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import register from "./routes/register.js";
import auth from "./routes/auth.js";
import refresh from "./routes/refresh.js";
import logout from "./routes/logout.js";
import users from "./routes/api/users.js";
import credentials from "./middleware/credentials.js";
import verifyJWT from "./middleware/verifyJWT.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import connectDB from "./config/connectDB.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware from cookies
app.use(cookieParser());

// Handle options credentials check - before CORS
app.use(credentials);

// Cross origin resource sharing
app.use(cors(corsOptions));

// Built in middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/register", register);
app.use("/auth", auth);
app.use("/refresh", refresh);
app.use("/logout", logout);

app.use(verifyJWT);
app.use("/users", users);

mongoose.connection.once("open", () => {
  console.log(`Connected to MongoDB`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
