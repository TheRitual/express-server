import express from "express";
import dotenv from "dotenv";
import friendsRouter from "./routes/friends/friends.router";
import mainRouter from "./routes/main/main.router";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/", mainRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Started Server http://localhost:${PORT}/`);
});
