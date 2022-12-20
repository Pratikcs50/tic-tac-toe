import React from "react";
import {
  Button
} from '@mui/material'

function StyledButton(props) {
  const { styles, title, color } = props;
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        height: "56px",
        width: "328px",
        fontSize: "14px",
        fontWeight: "700",
        fontFamily: "Epilogue",
        padding: "10px 16px 2px 16px",
        ...styles,
      }}
      variant="contained"
      color={color}
    >
      {title}
    </Button>
  );
}

export default StyledButton;
