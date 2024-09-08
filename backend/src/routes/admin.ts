import { Router } from "express";
import controller from "../controllers/admin";
import middleware from "../middlewares/admin";

const router: Router = Router();

router.route("/signin").post(controller.signin);

router.use(middleware);
router.route("/signup").post(controller.signup);

export default router;
