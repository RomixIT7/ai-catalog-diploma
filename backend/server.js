import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Tool } from "./models/Tool.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Успішно підключено до MongoDB Atlas"))
  .catch((err) => console.error("Помилка підключення до БД:", err));

app.get("/api/campers", async (req, res) => {
  try {
    const filters = {};

    if (req.query.location) {
      filters.developer = new RegExp(req.query.location, "i");
    }

    if (req.query.form) {
      filters.category = req.query.form;
    }

    if (req.query.AC === "true") {
      filters.hasApi = true;
    }

    if (req.query.kitchen === "true") {
      filters.hasMobileApp = true;
    }

    if (req.query.TV === "true") {
      filters.hasVision = true;
    }

    if (req.query.bathroom === "true") {
      filters.hasVoice = true;
    }

    if (req.query.transmission) {
      filters.accessType =
        req.query.transmission === "automatic" ? "hybrid" : "paid";
    }

    const tools = await Tool.find(filters);
    res.json({ items: tools });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/campers/:id", async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ message: "Not found" });
    res.json(tool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер успішно запущений на порту: ${PORT}`);
});
