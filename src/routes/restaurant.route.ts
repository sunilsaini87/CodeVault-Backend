import express from "express";
import {
  createRestaurant,
  getRestaurant,
  getRestaurantOrder,
  getSingleRestaurant,
  searchRestaurant,
  updateOrderStatus,
  updateRestaurant,
} from "../controllers/restaurant.controller";
import upload from "../middlewares/multer";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = express.Router();

// Route to create a new restaurant
// The user must be authenticated and the restaurant image is uploaded using multer

router
  .route("/")
  .post(isAuthenticated, upload.single("imageFile"), createRestaurant);
router.route("/").get(isAuthenticated, getRestaurant);
router
  .route("/")
  .put(isAuthenticated, upload.single("imageFile"), updateRestaurant);
router.route("/order").get(isAuthenticated, getRestaurantOrder);
router.route("/order/:orderId/status").put(isAuthenticated, updateOrderStatus);
router.route("/search/:searchText").get(isAuthenticated, searchRestaurant);
router.route("/:id").get(isAuthenticated, getSingleRestaurant);

export default router;
