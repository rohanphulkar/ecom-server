import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import path from 'path';
import * as url from 'url'
const Register = async (req, res) => {
  try {
    const { name, mobileNumber, email, password, confirmPassword } = req.body;

    const uploadedFiles = req.files;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      mobileNumber,
      email,
      password: hashedPassword, // Save the hashed password
    });
	const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
    // Save uploaded files to the user's files array
    newUser.files = uploadedFiles.map((file) =>
      path.join(__dirname, "uploads", file.path)
    );

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User data added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const UserList = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { Register, UserList };
