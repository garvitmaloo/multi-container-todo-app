export interface IStandardResponse<T> {
  error: {
    statusCode: number;
    message: string;
  } | null;
  result: T | null;
}

export interface ITodo {
  title: string;
  description: string;
}
