import {
  AddBannerImage,
  GetBannerImages,
} from "../controllers/bannerController.js";
import { singleFile } from "../middleware/uploadMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/upload", singleFile, AddBannerImage);

router.get("/", GetBannerImages);

export default router;
