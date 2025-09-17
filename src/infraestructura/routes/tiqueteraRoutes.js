import { Router } from "express";
import tiqueteraController from "../controllers/tiqueteraController.js";

const router = Router();

// Definimos la ruta para crear un nuevo cliente
router.post("/", tiqueteraController.create.bind(tiqueteraController));

export default router;    