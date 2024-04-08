import express from "express";
import { Register, UserList } from "../controllers/userController.js";
import { multiFile } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/list", UserList);
router.post("/register", multiFile, Register);

export default router;
