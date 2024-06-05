import type { Request, Response, NextFunction } from "express";

import fetchAllTodos from "../services/todos/fetchAllTodos";

const getAllTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const response = await fetchAllTodos();

  if (response.error !== null) {
    next(response.error.message);
    return;
  }

  res.status(200).send(response);
};

export default getAllTodos;
