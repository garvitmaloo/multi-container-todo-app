import axios from "../../../utils/axios";
import { IStandardResponse, ITodo } from "../../../types";

export const fetchAllTodos = async () => {
  const { data } = await axios.get<IStandardResponse<ITodo[]>>(
    `${import.meta.env.VITE_BACKEND_URL}/todos`,
  );
  return data;
};
