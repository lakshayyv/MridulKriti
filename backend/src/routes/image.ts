import { Router } from "express";
import middleware from "../middlewares/admin";
import controller from "../controllers/image";

const router: Router = Router();

router.use(middleware);

router.route("/upload").post(controller.upload);
router.route("/all").get(controller.fetchAll);
router.route("/:id").get(controller.fetchById);

export default router;
