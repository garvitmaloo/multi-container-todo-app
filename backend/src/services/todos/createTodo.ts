import type { Model } from "sequelize";
import type { IStandardResponse, ITodo } from "../../../types";
import Todo from "../../models/todos";
import { logger } from "../../utils/logger";

const createNewTodo = async (
  todoDetails: ITodo
): Promise<IStandardResponse<Model<ITodo>>> => {
  const { title, description, deadline } = todoDetails;

  try {
    const result = await Todo.create({
      title,
      description,
      deadline
    });

    return {
      error: null,
      result
    };
  } catch (err) {
    logger.error(`Failed to create new todo: ${(err as Error).message}`);
    return {
      error: {
        statusCode: 500,
        message: "Internal server error"
      },
      result: null
    };
  }
};

export default createNewTodo;
