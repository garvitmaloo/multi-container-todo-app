export interface IStandardResponse<T> {
  error: {
    statusCode: number;
    message: string;
  } | null;
  result: T | null;
}

export interface ITodo {
  id: number;
  title: string;
  description: string;
  deadline: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TodoDetails = {
  title: string;
  description: string;
  deadline: string;
};
