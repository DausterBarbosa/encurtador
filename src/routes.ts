import {Router} from "express";

import ShortLinkController from "./controllers/ShortLinkController";

const router = Router();

router.post("/create", ShortLinkController.create);
router.get("/:hash", ShortLinkController.redirect);
router.get("/", ShortLinkController.index);

export default router;