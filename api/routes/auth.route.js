import exptress from "express";
import { signup } from "../controllers/auth.controller.js";

const router = exptress.Router();

router.post("/signup", signup);

export default router;
