import axios from "../../../utils/axios";
import { TodoDetails } from "../../../types";

export const addNewTodo = async (todoDetails: TodoDetails) => {
  const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/todos`, todoDetails);
  return data;
};
