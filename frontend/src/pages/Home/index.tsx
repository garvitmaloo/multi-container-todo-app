import React from "react";

import { PrimaryButton, HorizontalFlexWrapper } from "../../styled";
import {
  VerticalWrapper,
  HorizontalWrapper,
  ContainerHeading,
  PrimaryHeading,
} from "./components/styles";
import TodoCard from "../../components/TodoCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { displayDateInStandardFormat } from "../../utils/date-utils";
import { fetchAllTodos, updateTodoStatus } from "./queries";
import { IStandardResponse } from "../../types";

const Home = () => {
  const { data: apiResponse } = useQuery({
    queryKey: ["todo"],
    queryFn: () => fetchAllTodos(),
  });

  const updateTodo = useMutation<
    IStandardResponse<string>,
    Error,
    { id: number; updateQuery: unknown }
  >({
    mutationFn: (args) => updateTodoStatus(args.id, args.updateQuery),
    mutationKey: ["todo"],
  });

  const handleClickHandler = (id: number) => {
    updateTodo.mutate({
      id,
      updateQuery: { isCompleted: true },
    });
  };

  const pendingTodos = apiResponse?.result?.filter((todo) => todo.isCompleted === false);
  const doneTodos = apiResponse?.result?.filter((todo) => todo.isCompleted === true);

  return (
    <>
      <HorizontalFlexWrapper>
        <PrimaryHeading>Your todos</PrimaryHeading>
        <PrimaryButton>Add new todo</PrimaryButton>
      </HorizontalFlexWrapper>

      <HorizontalWrapper style={{ gap: "1rem" }}>
        <VerticalWrapper>
          <ContainerHeading>Pending</ContainerHeading>

          {pendingTodos?.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              heading={todo.title}
              description={todo.description}
              deadline={displayDateInStandardFormat(new Date(todo.deadline))}
              isCompleted={false}
              onClickHandler={handleClickHandler}
            />
          ))}
        </VerticalWrapper>

        <VerticalWrapper>
          <ContainerHeading>Completed</ContainerHeading>

          {doneTodos?.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              heading={todo.title}
              description={todo.description}
              deadline={displayDateInStandardFormat(new Date(todo.deadline))}
              isCompleted={true}
              onClickHandler={() => {}}
            />
          ))}
        </VerticalWrapper>
      </HorizontalWrapper>
    </>
  );
};

export default Home;
