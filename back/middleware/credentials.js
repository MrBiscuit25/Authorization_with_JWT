import { allowedOrigins } from "../config/allowedOrigins.js";

const credentials = (req, res, next) => {
  const origin = req.header("Origin");
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

export default credentials;
