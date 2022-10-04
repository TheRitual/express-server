import { Request, Response } from "express";
import { friends } from "../../constants/friends.const";

const mainController = {
  mainPage: (req: Request, res: Response) => {
    res.json({ friends: friends });
  },
};

export default mainController;
