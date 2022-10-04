import { Request, Response } from "express";
import path from "path";
import { friends } from "../../constants/friends.const";

const mainController = {
  mainPage: (req: Request, res: Response) => {
    res.json({ friends: friends });
  },
  getFavicon: (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "favicon.ico"));
  },
};

export default mainController;
