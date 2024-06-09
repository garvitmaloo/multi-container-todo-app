/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import getAllTodosController from "../controllers/getAllTodos";
import putUpdateTodoStatusController from "../controllers/updateTodoStatus";
import createNewTodoController from "../controllers/createTodo";

const todoRoutes = Router();

todoRoutes.get("/", getAllTodosController);

todoRoutes.put("/:id", putUpdateTodoStatusController);

todoRoutes.post("/", createNewTodoController);

export { todoRoutes };
