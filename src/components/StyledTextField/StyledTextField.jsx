import React from "react";
import { InputLabel, TextField } from "@mui/material";
import "./StyledTextField.scss"

function StyledTextField(props) {
  const { inputTitle, type, placeholder } = props;
  return (
    <div>
      <InputLabel className='input_lable'>{inputTitle}</InputLabel>
      <TextField className='input_field' type={type} variant='outlined' placeholder={ placeholder} />
    </div>
  );
}

export default StyledTextField;
