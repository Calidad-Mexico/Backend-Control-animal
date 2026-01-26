import express from "express"
import {
    getAllQuarantines,
    getQuarantinesByAnimal,
    createQuarantine,
    updateQuarantine
} from "../../controllers/quarantines/quarantines.controller.js";

// Router
const router = express.Router()

// Rutas
router.get("/getAllQuarantines", getAllQuarantines);
router.get("/getQuarantinesByAnimal/:search", getQuarantinesByAnimal);
router.post("/createQuarantine", createQuarantine);
router.put("/updateQuarantine/:id", updateQuarantine);

export default router;

