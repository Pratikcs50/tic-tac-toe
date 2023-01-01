import React from "react";
import { Button } from "@mui/material";
import "./StyledButton.scss";

function StyledButton(props) {
  const { styles, title, color, onClick } = props;
  return (
    <Button
      sx={{
        ...styles,
      }}
      className='styled_button'
      variant='contained'
      color={color}
      onClick={onClick}>
      {title}
    </Button>
  );
}

export default StyledButton;
