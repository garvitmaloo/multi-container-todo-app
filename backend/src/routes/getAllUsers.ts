import type { Request, Response } from "express";

export default function getAllUsers(req: Request, res: Response): any {
  const allUsers = [
    {
      name: "User One",
      email: "user1@email.com"
    },
    {
      name: "User Two",
      email: "user2@email.com"
    }
  ];

  res.statusCode = 200;
  res.send(allUsers);
}
