import React from "react";
import "./ActionBar.scss";
import { IconButton } from "@mui/material";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { useNavigate } from "react-router-dom";

function ActionBar({ to }) {
  const navigate = useNavigate();

  return (
    <div className='actionbar'>
      <IconButton
        aria-label='navigate-before'
        size='large'
        onClick={() => navigate(to)}>
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
