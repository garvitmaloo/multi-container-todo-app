import axios from "../../../utils/axios";
import { IStandardResponse, ITodo } from "../../../types";

export const fetchAllTodos = async () => {
  const { data } = await axios.get<IStandardResponse<ITodo[]>>(
    `${import.meta.env.VITE_BACKEND_URL}/todos`,
  );
  return data;
};

export const updateTodoStatus = async (id: number, updateQuery: unknown) => {
  const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/todos/${id}`, updateQuery);
  return data;
};
