import express from 'express'
import {
    getAnimals,
    getAnimalsByID,
    createAnimal,
    deleteAnimals
} from "../../controllers/animals/animals.controller.js";

// Router
const router = express.Router()

// Rutas
router.get("/getAnimals", getAnimals)
router.get("/getAnimalByID/:id", getAnimalsByID)
router.post("/createAnimal", createAnimal)
router.delete("/deleteAnimals/:id", deleteAnimals)

export default router