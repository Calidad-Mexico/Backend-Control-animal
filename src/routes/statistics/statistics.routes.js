import express from 'express';
import {
    getStatistics
} from "../../controllers/statistics/statistics.controller.js";

// Router
const router = express();

// Rutas
router.get("/getStatistics", getStatistics);

export default router;