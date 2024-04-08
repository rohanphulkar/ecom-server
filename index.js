import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.js";
import UserRoutes from "./routes/UserRoutes.js";
import BannerRoutes from "./routes/BannerRoutes.js";
import AdminJSExpress from "@adminjs/express";
import { admin } from "./admin/index.js";
import * as url from 'url'
import path from 'path'

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
app.use(express.static(path.join(__dirname, '/public')));

// Connect to the database
connectDB();

// Routes
app.use("/user", UserRoutes);
app.use("/banner", BannerRoutes);

const adminRouter = AdminJSExpress.buildRouter(admin)
app.use(admin.options.rootPath, adminRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
