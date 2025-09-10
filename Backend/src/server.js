import express from "express";
import { ENV } from "./config/env.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(ENV.PORT, () => {
  console.log(ENV.MONGO_URI);
  console.log("Server is running on port ", ENV.PORT);
});
