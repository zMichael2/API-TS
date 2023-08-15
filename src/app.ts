import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnetion from "./config/moongose";
import {
  itemRouter,
  authRouter,
  orderRouter,
  fileRouter,
} from "./router/index";

const PORT = process.env.PORT || 3000;
const app = express();
dbConnetion();

app.use(cors());
app.use(express.json());
app.use(itemRouter);
app.use(authRouter);
app.use(orderRouter);
app.use(fileRouter);

app.listen(PORT, () => {
  console.log(`Server Initialized!!! PORT = ${PORT}`);
});
