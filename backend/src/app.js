import express from "express";
import cors from "cors";
import pathRoutes from "./routes/pathRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", pathRoutes);

export default app;
