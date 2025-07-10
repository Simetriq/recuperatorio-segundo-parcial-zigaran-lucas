import express from "express";
import { createPrograms, deleteProgram, getAllPrograms, getProgramsById, updateProgram } from "../controllers/language.controllers.js"

const ruta = express.Router();

ruta.get("/languages", getAllPrograms)
ruta.get("/languages/:id", getProgramsById)
ruta.post("/languages", createPrograms)
ruta.delete("/languages/:id", deleteProgram)
ruta.put("/languages/:id", updateProgram)

export default ruta;