import express from "express";
import { register,login,logout } from "../controller/AccountController.js";

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login)
router.route('/logout').post(logout)

export default router;