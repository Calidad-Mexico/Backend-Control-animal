import express from "express";
import {
    getAllAdoptions,
    getAdoptionByID,
    createAdoption,
    deleteAdoption,
    // Nuevos endpoints
    getAllAdoptionRequests,
    getAdoptionRequestByID,
    createAdoptionRequest,
    updateAdoptionStatus
} from "../../controllers/adoption/adoption.controller.js";

// Router
const router = express.Router();

// Rutas existentes (no modificar)
router.get("/getAllAdoptions", getAllAdoptions);
router.get("/getAdoptionByID/:id", getAdoptionByID);
router.post("/createAdoption", createAdoption);
router.delete("/deleteAdoption/:id", deleteAdoption);

// Nuevas rutas para solicitudes de adopción
router.get("/getAllAdoptionRequests", getAllAdoptionRequests);
router.get("/getAdoptionRequestByID/:search", getAdoptionRequestByID);
router.post("/createAdoptionRequest", createAdoptionRequest);
router.put("/updateAdoptionStatus/:id", updateAdoptionStatus);

export default router;