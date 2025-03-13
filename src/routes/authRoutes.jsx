import { Router } from "express";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User, { findOne } from "../models/User";

const router = Router();
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findOne({ email });
    if (!user || !(await compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
