import express from "express";
import dotenv from "dotenv";
import testDB from "./src/config/db.js";
import ruta from "./src/routes/language.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(express.json());

app.use("/api", ruta)

testDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`servidor corriendo en el puero ${PORT}`)
    })
});