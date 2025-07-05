import { Router } from "express";
import Chatbot from "../controllers/chatbot.js";

const router = Router()

router.route("/chatbot").post(Chatbot)

export default router