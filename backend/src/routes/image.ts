import { Router } from "express";
import middleware from "../middlewares/admin";
import controller from "../controllers/image";

const router: Router = Router();

router.use(middleware);

router.route("/upload").post(controller.upload);

export default router;
