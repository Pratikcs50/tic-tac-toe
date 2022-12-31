import React from "react";
import "./ActionBar.scss";
import { IconButton } from "@mui/material";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

function ActionBar({ to }) {
  return (
    <div className='actionbar'>
      <IconButton aria-label='navigate-before' size='large'>
        <NavigateBeforeRoundedIcon
          aria-label='navigate-before'
          sx={{
            fontSize: "32px",
            color: "#000000",
          }}
        />
      </IconButton>
    </div>
  );
}

export default ActionBar;
