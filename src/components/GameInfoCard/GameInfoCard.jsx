import React from "react";
import { Card, CardActions, CardContent, Box, Typography } from "@mui/material";
import "./GameInfoCard.scss";
import StyledButton from "../StyledButton/StyledButton";

export default function GameInfoCard() {
  return (
    <Card className='card'>
      <CardContent className="card_content">
        <Typography className='card_title'>Game with Tanmay</Typography>
        <Typography className='card_subtitle'>
          Tanmay just made their move! It's your turn to play now.
        </Typography>
        <Typography className='card_date_time'>
          9th June 2022, 3:15pm
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton
          size='small'
          title='Play!'
          styles={{ width: "296px", height: "40px" }}
        />
      </CardActions>
    </Card>
  );
}
