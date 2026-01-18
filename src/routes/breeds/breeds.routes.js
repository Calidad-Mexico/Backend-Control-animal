import express from 'express'
import {
    getBreeds,
    createBreed
} from "../../controllers/breeds/breeds.controller.js";

// Router
const router = express.Router()

// Rutas
router.get("/getBreeds", getBreeds)
router.post("/createBreed", createBreed)

export default router;