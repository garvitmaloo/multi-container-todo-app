import type { Model } from "sequelize";
import Todo from "../../models/todos";
import type { IStandardResponse, ITodo } from "../../../types";
import { logger } from "../../utils/logger";

// eslint-disable-next-line @typescript-eslint/array-type
const fetchAllTodos = async (): Promise<IStandardResponse<Model<ITodo>[]>> => {
  try {
    const dbResponse = await Todo.findAll();
    return {
      error: null,
      result: dbResponse
    };
  } catch (err) {
    logger.error("Error while fetching all todo - " + (err as Error).message);
    return {
      error: {
        statusCode: 500,
        message: (err as Error).message
      },
      result: null
    };
  }
};

export default fetchAllTodos;
