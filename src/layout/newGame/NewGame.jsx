import React from "react";
import "./NewGame.scss";
import ActionBar from "../../components/ActionBar/ActionBar";
import StyledTextField from "../../components/StyledTextField/StyledTextField";
import StyledButton from "../../components/StyledButton/StyledButton";
import { useNavigate } from "react-router-dom";

function NewGame() {
  const navigate = useNavigate();

  return (
    <div className='newgame_container'>
      <ActionBar to='/home' />
      <div className='text_container'>
        <div className='sub_heading'>Start a new game</div>
        <div className='heading'>Whom do you want to play with?</div>
      </div>
      <div className='form_container'>
        <StyledTextField
          inputTitle='Email'
          type='email'
          placeholder='Type your email here'
        />
      </div>
      <div className='action_container'>
        <StyledButton title='Start game' onClick={() => navigate("/game")} />
      </div>
    </div>
  );
}

export default NewGame;
