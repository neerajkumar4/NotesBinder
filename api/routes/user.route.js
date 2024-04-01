import express from "express";
import { getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verfyUser.js";

const router = express.Router();

router.get("/:id", getUser);

export default router;
