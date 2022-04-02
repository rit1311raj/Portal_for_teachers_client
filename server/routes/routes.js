import express from "express";
import { GetInfo } from "../controllers/info_controller.js";
import { CreateUser, LoginUser } from "../controllers/user_controller.js";

const router = express.Router();
//users

router.post("/signup", CreateUser);
router.post("/login", LoginUser);

//infos
// router.get("/infos", GetAllInfos);
router.get("/detail/:UANNumber", GetInfo);

export default router;
