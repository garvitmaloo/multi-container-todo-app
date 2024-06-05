/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import getAllTodos from "../controllers/getAllTodos";

const todoRoutes = Router();

todoRoutes.get("/", getAllTodos);

export { todoRoutes };
