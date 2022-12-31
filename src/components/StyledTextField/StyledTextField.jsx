import React from "react";
import { InputLabel, TextField } from "@mui/material";
import "./StyledTextField.scss"

function StyledTextField(props) {
  const { inputTitle, type, placeholder } = props;
  return (
    <>
      <InputLabel className='input_lable'>{inputTitle}</InputLabel>
      <TextField className='input_field' type={type} variant='outlined' placeholder={ placeholder} />
    </>
  );
}

export default StyledTextField;
