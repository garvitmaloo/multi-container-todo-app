/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import getAllTodosController from "../controllers/getAllTodos";
import putUpdateTodoStatusController from "../controllers/updateTodoStatus";

const todoRoutes = Router();

todoRoutes.get("/", getAllTodosController);

todoRoutes.put("/:id", putUpdateTodoStatusController);

export { todoRoutes };
