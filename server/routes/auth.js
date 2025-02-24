import express from "express";
import { login } from "../controllers/auth.js";  // Added .js extension

const router = express.Router();

router.post("/login", login);

export default router;
