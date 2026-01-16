import express from 'express'
import {
    getAnimals,
    getAnimalsByID,
    createAnimals,
    deleteAnimals
} from "../../controllers/animals/animals.controller.js";

// Router
const router = express.Router()

// Rutas
router.get("/getAnimals", getAnimals)
router.get("/getAnimalByID/:id", getAnimalsByID)
router.post("/createAnimals", createAnimals)
router.delete("/deleteAnimals/:id", deleteAnimals)

export default router