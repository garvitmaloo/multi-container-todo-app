import React from "react";

import { PrimaryButton, HorizontalFlexWrapper } from "../../styled";
import {
  VerticalWrapper,
  HorizontalWrapper,
  ContainerHeading,
  PrimaryHeading,
} from "./components/styles";
import TodoCard from "../../components/TodoCard";

const Home = () => {
  return (
    <>
      <HorizontalFlexWrapper>
        <PrimaryHeading>Your todos</PrimaryHeading>
        <PrimaryButton>Add new todo</PrimaryButton>
      </HorizontalFlexWrapper>

      <HorizontalWrapper style={{ gap: "1rem" }}>
        <VerticalWrapper>
          <ContainerHeading>Pending</ContainerHeading>

          <TodoCard
            heading='Learn React'
            description='React is one of the best frameworks for building frontend application'
            deadline='June 10, 2024'
            isCompleted={false}
          />
        </VerticalWrapper>

        <VerticalWrapper>
          <ContainerHeading>Completed</ContainerHeading>

          <TodoCard
            heading='Learn JavaScript'
            description='JavaScript is a programming language'
            deadline='June 01, 2024'
            isCompleted={true}
          />
        </VerticalWrapper>
      </HorizontalWrapper>
    </>
  );
};

export default Home;
