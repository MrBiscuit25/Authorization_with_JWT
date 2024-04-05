import User from "../model/User.js";
import bcrypt from "bcrypt";

const handleNewUser = async (req, res) => {
  console.log(req.body);
  const { email, pwd } = req.body;
  if (!email || !pwd)
    return res
      .status(400)
      .json({ message: "Username and Password are required" });

  // Check for duplicate username in the database
  const duplication = await User.findOne({ email }).exec();
  if (duplication) return res.sendStatus(409); // Conflict
  try {
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(pwd, 10);

    // Create and store the new user
    const result = await User.create({
      email,
      password: hashedPassword,
    });
    console.log(result);
    res.status(201).json({ message: `New user ${email} created.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handleNewUser;
