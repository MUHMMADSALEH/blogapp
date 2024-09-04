import express from "express"
import { AuthController } from "../controllers/auth.js";

const router=express.Router()


router.post("/signin",AuthController.singin);
router.post("/signup",AuthController.singup)

export default router