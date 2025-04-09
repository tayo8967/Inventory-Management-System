import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log ("Server started on http://localhost:" + PORT);

    connectDb();
})