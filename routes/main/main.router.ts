import express from "express";
import mainController from "./main.controller";

const mainRouter = express.Router();

mainRouter.get("/", mainController.mainPage);

export default mainRouter;
