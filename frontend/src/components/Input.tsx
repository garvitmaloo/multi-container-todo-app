import React, { ChangeEventHandler } from "react";

import { BasicInput } from "../styled";

const Input: React.FC<InputProps> = (props) => {
  const { name, placeholderText, inputType, defaultValue, onChange, ...rest } = props;

  return (
    <BasicInput
      name={name}
      placeholder={placeholderText}
      type={inputType}
      defaultValue={defaultValue}
      onChange={onChange}
      {...rest}
    />
  );
};

type InputProps = {
  placeholderText: string;
  inputType?: string;
  name: string;
  defaultValue?: string | number;
  // eslint-disable-next-line no-unused-vars
  onChange: ChangeEventHandler<HTMLInputElement>;
};
export default Input;
