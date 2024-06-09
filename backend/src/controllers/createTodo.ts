import type { Request, Response, NextFunction } from "express";
import createNewTodo from "../services/todos/createTodo";

const createNewTodoController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { title, description, deadline } = req.body;
  const response = await createNewTodo({ title, description, deadline });

  if (response.error !== null) {
    next(response.error.message);
    return;
  }

  res.status(201).send(response);
};

export default createNewTodoController;
