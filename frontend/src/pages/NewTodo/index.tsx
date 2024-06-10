import React, { useState, ChangeEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Heading2, HorizontalFlexWrapper, Paragraph, PrimaryButton } from "../../styled";
import Input from "../../components/Input";
import { InputsContainer } from "./components/styles";
import { addNewTodo } from "./queries";
import { TodoDetails } from "../../types";

const NewTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const navigate = useNavigate();

  const addTodoMutation = useMutation({
    mutationFn: ({ title, description, deadline }: TodoDetails) =>
      addNewTodo({ title, description, deadline }),
    mutationKey: ["todo"],
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value as string);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value as string);
  };

  const handleDeadlineChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeadline(event.target.value as string);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoMutation.mutate({ title, description, deadline });
  };

  if (addTodoMutation.isSuccess) {
    navigate("/");
  }

  return (
    <>
      <Heading2>Add New Todo</Heading2>
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <Input name='title' placeholderText='Title' onChange={handleTitleChange} />
          <Input
            name='description'
            placeholderText='Description'
            onChange={handleDescriptionChange}
          />
          <HorizontalFlexWrapper style={{ gap: "8px" }}>
            <Paragraph>Deadline</Paragraph>
            <Input
              name='deadline'
              placeholderText='Deadline'
              inputType='date'
              onChange={handleDeadlineChange}
            />
          </HorizontalFlexWrapper>

          <PrimaryButton type='submit'>Add New Todo</PrimaryButton>
        </InputsContainer>
      </form>
    </>
  );
};

export default NewTodo;
