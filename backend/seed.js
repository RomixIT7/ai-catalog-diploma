import mongoose from "mongoose";
import dotenv from "dotenv";
import { Tool } from "./models/Tool.js";

dotenv.config();

const tools = [
  {
    name: "ChatGPT (GPT-4o)",
    price: 20,
    rating: 4.8,
    location: "OpenAI",
    description:
      "Найвідоміший мультимодальний чатбот у світі. Пропонує швидку генерацію відповідей, аналіз коду та роботу з файлами. Навколо сервісу існує багато клікбейтів та міфів від інфоциган, проте він залишається золотим стандартом індустрії.",
    form: "panelTruck",
    transmission: "automatic",
    engine: "multimodal",
    AC: true,
    kitchen: true,
    radio: true,
    bathroom: false,
    TV: true,
    gallery: [
      {
        original:
          "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
      },
    ],
    length: "2022 рік",
    width: "128k tokens",
    height: "Proprietary",
    tank: "Позови від NYT",
    consumption: "$20/міс або Free",
    reviews: [
      {
        reviewer_name: "Олексій К.",
        reviewer_rating: 5,
        comment:
          "Чудовий інструмент для автоматизації рутини, але бездумно копіювати код не варто.",
      },
    ],
  },
  {
    name: "Claude 3.5 Sonnet",
    price: 20,
    rating: 4.9,
    location: "Anthropic",
    description:
      "Головний конкурент ChatGPT з потужним логічним мисленням. Модель Claude активного обговорювалася в експертних колах через феноменальні здатності у сфері кібербезпеки: вона виявляє критичні вразливості в коді, які люди шукали роками.",
    form: "panelTruck",
    transmission: "automatic",
    engine: "text-centric",
    AC: true,
    kitchen: true,
    radio: false,
    bathroom: false,
    TV: true,
    gallery: [
      {
        original:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      },
    ],
    length: "2023 рік",
    width: "200k tokens",
    height: "Proprietary",
    tank: "Суди відсутні",
    consumption: "$20/міс або Free",
    reviews: [
      {
        reviewer_name: "Марія Н.",
        reviewer_rating: 5,
        comment: "Найкраще пише тексти українською мовою серед усіх ШІ.",
      },
    ],
  },
  {
    name: "Suno AI (v4)",
    price: 10,
    rating: 4.7,
    location: "Suno Inc.",
    description:
      "Піонер у сфері генерації повноцінних музичних треків із вокалом. Наразі веде масштабні судові процеси з найбільшими світовими музичними лейблами щодо авторських прав на навчальні дані. Проте зупинити поширення створених мільйонів треків уже неможливо.",
    form: "fullyIntegrated",
    transmission: "manual",
    engine: "audio",
    AC: true,
    kitchen: false,
    radio: true,
    bathroom: true,
    TV: false,
    gallery: [
      {
        original:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
      },
    ],
    length: "2023 рік",
    width: "Текст пісні",
    height: "Proprietary",
    tank: "Суди з RIAA",
    consumption: "$10/міс або Free",
    reviews: [
      {
        reviewer_name: "Роман М.",
        reviewer_rating: 5,
        comment:
          "Генерація хітів за 30 секунд. Суди з лейблами лише доводять, наскільки технологія потужна.",
      },
    ],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Tool.deleteMany({});
    await Tool.insertMany(tools);
    console.log("База аі_саtаlоg створена, колекція tools наповнена зразками!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
