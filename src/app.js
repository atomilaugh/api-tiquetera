import express from "express";
import tiqueteraRoutes from "./infraestructura/routes/tiqueteraRoutes.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Conectamos a la base de datos
connectDB();

// Rutas
app.use("/api/tiquetera", tiqueteraRoutes); 

export default app;

// import express from "express";
// import tiqueteraRoutes from "./infraestructura/routes/tiqueteraRoutes.js";


