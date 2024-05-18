import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verfyUser.js";

const router = express.Router();

router.get("/:id", getUser);
// router.delete("/delete/:id", verifyToken, deleteUser);
router.delete("/delete/:id", deleteUser);
export default router;
