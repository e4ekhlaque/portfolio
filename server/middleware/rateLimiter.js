import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // max 3 form submissions per IP
  message: {
    success: false,
    message: "Too many messages sent. Try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default rateLimiter;