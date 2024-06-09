import React from "react";

import { PrimaryButton, HorizontalFlexWrapper } from "../../styled";
import {
  VerticalWrapper,
  HorizontalWrapper,
  ContainerHeading,
  PrimaryHeading,
} from "./components/styles";
import TodoCard from "../../components/TodoCard";
import { useQuery } from "@tanstack/react-query";
import { displayDateInStandardFormat } from "../../utils/date-utils";
import { fetchAllTodos } from "./queries";

const Home = () => {
  const { data: apiResponse } = useQuery({
    queryKey: ["todo"],
    queryFn: () => fetchAllTodos(),
  });

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
              heading={todo.title}
              description={todo.description}
              deadline={displayDateInStandardFormat(new Date(todo.deadline))}
              isCompleted={false}
            />
          ))}
        </VerticalWrapper>

        <VerticalWrapper>
          <ContainerHeading>Completed</ContainerHeading>

          {doneTodos?.map((todo) => (
            <TodoCard
              key={todo.id}
              heading={todo.title}
              description={todo.description}
              deadline={displayDateInStandardFormat(new Date(todo.deadline))}
              isCompleted={true}
            />
          ))}
        </VerticalWrapper>
      </HorizontalWrapper>
    </>
  );
};

export default Home;
