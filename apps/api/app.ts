import express from "express"
import { setUpRoutes } from "./routes.js";

const app=express();
app.use(express.json());
setUpRoutes(app);

export default app;