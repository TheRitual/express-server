import { Request, Response } from "express";

import { friends } from "../../constants/friends.const";

const friendsController = {
  getFriends: (req: Request, res: Response) => {
    res.json(friends);
  },

  getOneFriend: (req: Request, res: Response) => {
    const friendId: number = Number(req.params.friendId);
    const friend = friends[friendId];
    res.json(friend || "There is no friend with provided ID");
  },
};

export default friendsController;
