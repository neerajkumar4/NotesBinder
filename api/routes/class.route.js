import express from "express";
import {
  createClass,
  deleteClass,
  getClass,
  updateClass,
} from "../controllers/class.controller.js";
import { verifyToken } from "../utils/verfyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createClass);
router.delete("/delete/:id", verifyToken, deleteClass);
router.post("/update/:id", verifyToken, updateClass);
router.get("/get/:id", getClass);

export default router;
