import express from "express";
import { ENV } from "./config/env.js"

const app = express();
const PORT = ENV.PORT || 5005;

app.get("/api/health", (req, res) => {
    res.status(200).json({ success: true})
})

app.listen(5005, () => {
    console.log("Server is running on PORT:", PORT);
});