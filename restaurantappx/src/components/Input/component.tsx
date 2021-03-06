import { InputUnstyled, InputUnstyledOwnProps } from "@mui/base";
import { styled } from "@mui/system";
import { FC } from "react";

const StyledInputElement = styled("input")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  background: #E9E9E9;
  border: 1px solid black;
  border-radius: 10px;
  height: 2rem;
  color: black;
  width: 90%;
  font-size: 1rem;
  padding-right: 5%;
  padding-left: 5%;

  &:focus {
    outline: none;
  }
`;

export interface InputCustom {
  ErrorComponent?: JSX.Element;
}

const Input: FC<InputCustom & InputUnstyledOwnProps> = ({
  ErrorComponent,
  ...props
}) => {
  return (
    <>
      {ErrorComponent}
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} />
    </>
  );
};
export default Input;
