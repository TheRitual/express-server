import express from "express";
import friendsController from "./friends.controller";

const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);

friendsRouter.get("/:friendId", friendsController.getOneFriend);

export default friendsRouter;
