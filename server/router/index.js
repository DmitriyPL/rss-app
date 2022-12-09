import { Router } from "express";

import { userController } from '../controllers/user-controller.js';
import { rssController } from "../controllers/rss-controller.js";
import { docController } from "../controllers/doc-controller.js";

export const router = Router();

router.get('/initUser', userController.initUser);
router.post('/addrss', rssController.addRss);
router.post('/updaterss', rssController.updateRss);
router.post('/deleterss', rssController.deleteRss);
router.get('/rsslinks', rssController.getAllRssLinks);
router.post('/getdocsbyid', docController.getDocsByRssId);
// router.get('/activate/:link', userController.activate);
// router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, userController.getUsers);

