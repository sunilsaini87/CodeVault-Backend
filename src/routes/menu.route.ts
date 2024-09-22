import express from "express";
import upload from "../middlewares/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { addMenu, editMenu } from "../controllers/menu.controller";

const router = express.Router();

// Route to add a new menu item

router.route("/").post(isAuthenticated, upload.single("image"), addMenu);
router.route("/:id").put(isAuthenticated, upload.single("image"), editMenu);

export default router;
