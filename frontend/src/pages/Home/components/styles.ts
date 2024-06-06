import styled from "styled-components";

import {
  Heading1,
  Heading3,
  HorizontalFlexWrapper,
  VerticalFlexWrapper,
  Heading6,
  Paragraph,
} from "../../../styled";

export const HorizontalWrapper = styled(HorizontalFlexWrapper)`
  align-items: flex-start;
`;

export const VerticalWrapper = styled(VerticalFlexWrapper)`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const PrimaryHeading = styled(Heading1)`
  margin: 0;
`;

export const ContainerHeading = styled(Heading3)`
  text-align: left;
  width: 100%;
  margin: 0 0 0.5rem;
`;

export const TodoCard = styled(HorizontalFlexWrapper)`
  box-shadow: 0px 2px 5px -1px #afafaf;
  border-radius: 10px;
  align-self: stretch;
`;

export const TodoHeading = styled(Heading6)`
  margin: 0;
`;

export const TodoCardTextWrapper = styled(VerticalFlexWrapper)`
  flex: 1;
  padding: 0;
`;

export const TodoDescription = styled(Paragraph)``;

export const TodoDeadline = styled(Paragraph)`
  font-style: italic;
`;
