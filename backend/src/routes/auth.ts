import { Router } from "express";
import middleware from "../middlewares/admin";
import controller from "../controllers/auth";

const router: Router = Router();

router.use(middleware);
router.route("/check").get(controller.check);

export default router;
