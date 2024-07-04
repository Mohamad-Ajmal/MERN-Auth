import exptress from "express";
import {
  singin,
  signup,
  google,
  signout,
} from "../controllers/auth.controller.js";

const router = exptress.Router();

router.post("/signup", signup);
router.post("/signin", singin);
router.post("/google", google);
router.get("/signout", signout);

export default router;
