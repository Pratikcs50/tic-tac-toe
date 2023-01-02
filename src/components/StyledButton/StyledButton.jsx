import React from "react";
import { Button } from "@mui/material";
import "./StyledButton.scss";

function StyledButton(props) {
  const { styles, title, color, onClick, size } = props;
  return (
    <Button
      sx={{
        ...styles,
      }}
      className='styled_button'
      variant='contained'
      color={color}
      size={size ? size : "medium"}
      onClick={onClick}>
      {title}
    </Button>
  );
}

export default StyledButton;
