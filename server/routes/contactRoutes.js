import express from "express";
import rateLimiter from "../middleware/rateLimiter.js";
import { contactValidation } from "../validators/contactValidator.js";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

router.post(
  "/",
  submitContact
);

export default router;