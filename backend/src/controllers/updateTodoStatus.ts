/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import type { Request, Response, NextFunction } from "express";
import { updateTodoStatus } from "../services/todos/updateTodoStatus";

const putUpdateTodoStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const updateQuery = req.body as { [x: string]: any };

  const response = await updateTodoStatus(Number(id), updateQuery);

  if (response.error !== null) {
    next(response.error.message);
    return;
  }

  res.status(200).send(response);
};

export default putUpdateTodoStatusController;
