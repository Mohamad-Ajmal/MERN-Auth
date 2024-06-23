import exptress from "express";
import { singin, signup } from "../controllers/auth.controller.js";

const router = exptress.Router();

router.post("/signup", signup);
router.post("/signin", singin);

export default router;
