import { Router } from "express";
import {userLogin, userRegister, userDashboard} from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/user.middlewares.js";


const router = Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.get("/dashboard", userDashboard);

export {
    router,
}