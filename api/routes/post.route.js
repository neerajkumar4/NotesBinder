import express from "express";
import { createPost, getPost } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verfyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.get("/:id", getPost);

export default router;
