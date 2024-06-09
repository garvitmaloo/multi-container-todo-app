/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import type { IStandardResponse } from "../../../types";
import { logger } from "../../utils/logger";
import Todo from "../../models/todos";

const updateTodoStatus = async (
  todoId: number,
  updateQuery: { [x: string]: any }
): Promise<IStandardResponse<string>> => {
  try {
    const result = await Todo.update(updateQuery, { where: { id: todoId } });

    if (result[0] === 0) {
      return {
        error: {
          statusCode: 400,
          message: "Bad request"
        },
        result: null
      };
    }

    return {
      error: null,
      result: "Todo marked as done"
    };
  } catch (err) {
    logger.error(`Failed to update Todo status: ${(err as Error).message}`);
    return {
      error: {
        statusCode: 500,
        message: "Internal server error"
      },
      result: null
    };
  }
};

export { updateTodoStatus };
