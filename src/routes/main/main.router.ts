import express from "express";
import mainController from "./main.controller";

const mainRouter = express.Router();

mainRouter.get("/", mainController.mainPage);
mainRouter.get("/favicon.ico", mainController.getFavicon);

export default mainRouter;
