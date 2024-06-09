import React from "react";
import styled from "styled-components";

import {
  SecondaryButton,
  HorizontalFlexWrapper,
  VerticalFlexWrapper,
  Heading6,
  Paragraph,
} from "../styled";

const Card = styled(HorizontalFlexWrapper)`
  box-shadow: 0px 2px 5px -1px #afafaf;
  border-radius: 10px;
  align-self: stretch;
`;

const TodoHeading = styled(Heading6)`
  margin: 0;
`;

const TodoCardTextWrapper = styled(VerticalFlexWrapper)`
  flex: 1;
  padding: 0;
`;

const TodoDescription = styled(Paragraph)``;

const TodoDeadline = styled(Paragraph)`
  font-style: italic;
`;

const TodoCard: React.FC<TodoCardProps> = ({ heading, description, deadline, isCompleted }) => {
  return (
    <Card style={{ gap: "0.5rem" }} data-testid='todo-card-wrapper'>
      <TodoCardTextWrapper>
        <TodoHeading>{heading}</TodoHeading>
        <TodoDescription>{description}</TodoDescription>
        <TodoDeadline>Deadline - {deadline}</TodoDeadline>
      </TodoCardTextWrapper>
      <SecondaryButton
        disabled={isCompleted}
        style={{ cursor: isCompleted ? "not-allowed" : "pointer" }}
      >
        {isCompleted ? "Done" : "Mark as done"}
      </SecondaryButton>
    </Card>
  );
};

type TodoCardProps = {
  heading: string;
  description: string;
  deadline: string;
  isCompleted: boolean;
};
export default TodoCard;
