import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import { secureToken } from "../middleware/secureToken.js";

const router = express.Router()

router.post('/send-message/:id',secureToken,sendMessage)
router.get('/get-message/:id',secureToken,getMessage)

export default router 